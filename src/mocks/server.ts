import HTTP_STATUS_CODES from 'http-status-codes'
import { rest, RequestHandler, DefaultBodyType } from 'msw'
import { setupServer } from 'msw/node'

const defaultHandlers = Object.values(rest).map(
  (method: (path: string, func: (...args: any[]) => void) => RequestHandler) =>
    method('*', (_, res, ctx) => res(ctx.json({}))),
)

export const server = setupServer(...defaultHandlers)

type ServerResponse = Partial<{
  status: number
  body: DefaultBodyType
}>

type MockServer = {
  get: Helper
  post: Helper
  put: Helper
  delete: Helper
}

type Helper = (path: RegExp | string, response?: ServerResponse) => void

export const mockServer: MockServer = Object.entries(rest).reduce((mock, [key, method]) => {
  const helper: Helper = (
    path,
    { status = HTTP_STATUS_CODES.OK, body } = { status: HTTP_STATUS_CODES.OK },
  ) => server.use(method(path, (_, res, ctx) => res(ctx.status(status), ctx.json(body))))

  return { ...mock, [key]: helper }
}, {} as MockServer)
