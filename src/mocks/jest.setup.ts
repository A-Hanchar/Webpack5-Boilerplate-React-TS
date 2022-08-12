import { configure as rtlConfigure } from '@testing-library/dom'
import '@testing-library/jest-dom'

import { server } from './server'

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

rtlConfigure({
  testIdAttribute: '',
})
