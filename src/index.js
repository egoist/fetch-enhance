class NetworkError extends Error {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = message
  }
}

export default function fetchEnhance(...payload) {
  const res = data => {
    if (data.ok) {
      return data
    }
    const error = new NetworkError(data.statusText)
    error.status = data.status
    error.headers = data.headers
    error.data = data
    throw error
  }

  if (typeof window !== 'undefined') {
    return window.fetch(...payload).then(res)
  }

  return (...args) => {
    return payload[0](...args).then(res)
  }
}
