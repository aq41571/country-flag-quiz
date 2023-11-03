'use client'

import type { EmotionCache, Options } from '@emotion/cache'

import createCache from '@emotion/cache'

import { CacheProvider as DefaultCacheProvider } from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import { ReactNode, useState } from 'react'

interface NextAppDirEmotionCacheProviderProps {
  options: Omit<Options, 'insertionPoint'>
  // eslint-disable-next-line react/require-default-props
  CacheProvider?: (props: { value: EmotionCache; children: ReactNode }) => JSX.Element | null
  children: ReactNode
}

export const NextAppDirEmotionCacheProvider = (props: NextAppDirEmotionCacheProviderProps) => {
  const { options, CacheProvider = DefaultCacheProvider, children } = props

  const [registry] = useState(() => {
    const cache = createCache(options)
    cache.compat = true
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const prevInsert = cache.insert
    let inserted: { name: string; isGlobal: boolean }[] = []
    cache.insert = (...args) => {
      const [selector, serialized] = args
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({ name: serialized.name, isGlobal: !selector })
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const inserted = registry.flush()
    if (inserted.length === 0) return null
    let styles = ''
    let dataEmotionAttribute = registry.cache.key

    const globals: { name: string; style: string }[] = []

    inserted.forEach(({ name, isGlobal }) => {
      const style = registry.cache.inserted[name]

      if (typeof style !== 'boolean') {
        if (isGlobal) {
          globals.push({ name, style })
        } else {
          styles += style
          dataEmotionAttribute += ` ${name}`
        }
      }
    })

    return (
      <>
        {globals.map(({ name, style }) => (
          <style
            key={name}
            data-emotion={`${registry.cache.key}-global ${name}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style }}
          />
        ))}
        {styles && (
          <style
            data-emotion={dataEmotionAttribute}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: styles }}
          />
        )}
      </>
    )
  })

  return <CacheProvider value={registry.cache}>{children}</CacheProvider>
}
