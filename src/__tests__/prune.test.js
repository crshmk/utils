import { prune } from '../prune'

const axiosErrorResponse = {
  message: 'Request failed with status code 502',
  config: {
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'User-Agent': 'axios/0.23.0',
      'Content-Length': 231
    },
    baseURL: 'http://localhost:1112',
    method: 'post',
    url: '/users',
    data: 'config data'
  },
  request: {
    outputData: [],
    outputSize: 0,
    writable: true,
    destroyed: true,
  },
  response: {
    status: 502,
    statusText: 'Bad Gateway',
    headers: {
      'x-powered-by': 'Express',
      'content-type': 'application/json; charset=utf-8',
      'content-length': '1',
      date: 'Mon, 27 Feb 2023 11:36:09 GMT',
      connection: 'keep-alive',
      'keep-alive': 'timeout=5'
    },
    config: {
      baseURL: 'http://localhost:8989',
      method: 'post',
      url: '/users',
    },
    data: 'response data'
  }
}

describe('prune', () => { 
  test('extracts props and indices from an object, preserving shape', () => {
    const paths = [
      ['message'],
      ['config', 'url'],
      ['config', 'data'],
      ['response', 'status'],
      ['response', 'statusText'],
      ['response', 'data']
    ]

    const expected = {
      message:  'Request failed with status code 502',
      config: {
        url: '/users',
        data: 'config data'
      },
      response: {
        status: 502,
        statusText: 'Bad Gateway',
        data: 'response data'
      }
    }

    const makeErrorResponse = prune(paths)
    expect(makeErrorResponse(axiosErrorResponse)).toStrictEqual(expected)
  })
  test('sets leaf nodes to null (preserving shape for JSON.stringify)', () => {
    const paths = [
      ['one', 2, 'two'],
      ['three']
    ]
    const expected = {
      one: [undefined, undefined, { two: null }],
      three: null
    }
    expect(JSON.stringify(prune(paths, {}))).toStrictEqual(JSON.stringify(expected))
  })
 })