export const validateId = (id: number, validIds: number[]) => {
  if (!validIds.includes(id)) throw new Error('Invalid id')
  return id
}
export const validateEmoji = (emoji: string, validEmojis: string[]) => {
  if (!validEmojis.includes(emoji)) throw new Error('Invalid emoji')
  return emoji
}
export const validateLimit = (limit: number, validIds: number[]) => {
  const maxLen = validIds.length
  if (limit < 0 || limit > maxLen) throw new Error('Invalid length')
  return limit
}
