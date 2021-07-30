export const getFirstItem = (data) => {
  if (Array.isArray(data)) {
    return data[0]
  }
  return {}
} 