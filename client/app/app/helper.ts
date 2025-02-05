export function toSentenceCase(input: string) {
  if (!input || typeof input !== 'string') {
    return ''
  }

  // Trim whitespace, convert the entire string to lowercase, and capitalize the first letter
  const formatted = input.trim().toLowerCase()
  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}
