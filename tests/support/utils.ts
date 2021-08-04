/*
 * Set the first letter of the keys to be lowercase
 */
export function dictKeysToLowerCase(obj: any) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k.charAt(0).toLowerCase() + k.slice(1), v])
  )
}
