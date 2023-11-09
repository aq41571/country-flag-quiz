import { validateEmoji, validateId, validateLimit } from './validators'
import { getCountryEmojis, getCountryIds } from '../boundary/boundaries'

describe('useCase', () => {
  const validIds = getCountryIds()
  const validEmojis = getCountryEmojis()

  describe('validateId', () => {
    it('データのあるidであればidを返却する', () => {
      expect(validateId(1, validIds)).toBe(1)
      expect(validateId(100, validIds)).toBe(100)
      expect(validateId(250, validIds)).toBe(250)
    })
    it('データのないidはエラーとする', () => {
      expect(() => validateId(0, validIds)).toThrow('Invalid id')
      expect(() => validateId(251, validIds)).toThrow('Invalid id')
    })
  })
  describe('validateEmoji', () => {
    it('データのある絵文字であれば絵文字を返却する', () => {
      expect(validateEmoji('🇺🇸', validEmojis)).toBe('🇺🇸')
      expect(validateEmoji('🇫🇷', validEmojis)).toBe('🇫🇷')
      expect(validateEmoji('🇿🇦', validEmojis)).toBe('🇿🇦')
    })
    it('データのない絵文字はエラーとする', () => {
      expect(() => validateEmoji('🥐', validEmojis)).toThrow('Invalid emoji')
      expect(() => validateEmoji('🍣', validEmojis)).toThrow('Invalid emoji')
      expect(() => validateEmoji('🇯🇵🇯🇵', validEmojis)).toThrow('Invalid emoji')
    })
  })
  describe('validateLimit', () => {
    it('0以上、データの数以下の数値であれば数値を返却する', () => {
      expect(validateLimit(0, validIds)).toBe(0)
      expect(validateLimit(1, validIds)).toBe(1)
      expect(validateLimit(10, validIds)).toBe(10)
      expect(validateLimit(250, validIds)).toBe(250)
    })
    it('データの数より大きい数値はエラーとする', () => {
      expect(() => validateLimit(251, validIds)).toThrow('Invalid length')
      expect(() => validateLimit(500, validIds)).toThrow('Invalid length')
    })
    it('負の数値はエラーとする', () => {
      expect(() => validateLimit(-1, validIds)).toThrow('Invalid length')
      expect(() => validateLimit(-100, validIds)).toThrow('Invalid length')
    })
  })
})
