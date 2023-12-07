export const shuffle = <T>(array: T[]) => {
  const newArray = [...array]
  return newArray.sort(() => Math.random() - 0.5)
}
