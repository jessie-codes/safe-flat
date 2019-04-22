const defaultDelimiter = '.'

module.exports = (obj, delimiter) => {
  const result = {}
  const seperator = delimiter || defaultDelimiter

  if (typeof obj !== 'object') {
    return obj
  }

  const flat = (original, stack, prev) => {
    Object.entries(original).forEach(([key, value]) => {
      const newKey = prev
        ? prev + seperator + key
        : key
      if (typeof value === 'object' && value !== null) {
        stack.forEach((s) => {
          if (value === s) {
            value = '[Circular]'
          }
        })
        stack.push(value)
        if (typeof value === 'object') {
          return flat(value, stack, newKey)
        }
      }
      result[newKey] = value
    })
  }

  flat(obj, [obj])

  return result
}
