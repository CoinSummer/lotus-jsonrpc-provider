import axios, { AxiosRequestConfig } from 'axios'

interface ProviderConfig {
  url: string
  token: string
}

export const removeEmptyHeaders = (headers: AxiosRequestConfig['headers']) => {
  const newHeaders = {}
  Object.keys(headers).forEach((key: string) => {
    if (headers[key]) {
      newHeaders[key] = headers[key]
    }
  })
  return newHeaders
}

export const throwIfErrors = (response: any) => {
  if (response.error) {
    throw new Error(response.error.message ? response.error.message : 'Unknown jsonrpc error')
  } else {
    return response
  }
}

export class JsonRpcProvider {
  private url: string
  private token: string

  constructor(config: ProviderConfig) {
    if (!config) {
      throw new Error('Must pass a config object to the Lotus JSON RPC Provider constructor.')
    }
    this.url = config.url || 'http://127.0.0.1:1234/rpc/v0'
    this.token = config.token
  }

  public async request(method: string, ...params: any) {
    const { data } = await axios.post(
      this.url,
      {
        jsonrpc: '2.0',
        method: `Filecoin.${method}`,
        params: [...params],
        id: 1,
      },
      {
        headers: removeEmptyHeaders({
          Accept: '*/*',
          Authorization: this.token ? `Bearer ${this.token}` : null,
        }),
      },
    )
    throwIfErrors(data)
    return data.result
  }
}
