export const sleep = (duration: number) => {
  const start = Date.now()

  const end = start + duration
  let current = start

  while (current < end) {
    current = Date.now()
  }
  
  return true
}
