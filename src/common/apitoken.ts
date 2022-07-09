interface ValidateToken {
  valid: boolean
  payload?: any
  error?: any
}

export async function isValidAPIKey(request: any): Promise<ValidateToken> {
  const token = getAuthorizationToken(request)
  if (!token) {
    return { valid: false, error: `Did not found ${token} token` }
  }

  const apiKey: any = await APIKEY.get(token, 'json')

  if (!apiKey) {
    return { valid: false, error: `Did not found ${token} token` }
  }

  await APIKEY.put(token, JSON.stringify({ ...apiKey, last_used: new Date().toISOString() }))
  return { valid: true, payload: apiKey }
}

function getAuthorizationToken(request: any) {
  const authHeader = request.headers.get('Authorization')
  if (!authHeader || authHeader.substring(0, 6) !== 'Bearer') {
    return null
  }
  return authHeader.substring(6).trim()
}
