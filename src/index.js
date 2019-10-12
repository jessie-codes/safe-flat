const defaultDelimiter = '.'

const isDate = (obj) => {
  return obj instanceof Date
}

module.exports = (obj, delimiter) => {
  const result = {}
  const seperator = delimiter || defaultDelimiter

  if (typeof obj !== 'object' || isDate(obj)) return obj

  const flat = (original, stack, prev) => {
    Object.entries(original).forEach(([key, value]) => {
      const newKey = prev
        ? prev + seperator + key
        : key
      if (typeof value === 'object' && value !== null) {
        stack.forEach((s) => {
          if (value === s && !isDate(value)) {
            value = '[Circular]'
          }
        })
        stack.push(value)
        if (typeof value === 'object' && !isDate(value)) {
          return flat(value, stack, newKey)
        }
      }
      result[newKey] = value
    })
  }

  flat(obj, [obj])

  return result
}
