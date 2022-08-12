import { render } from '@testing-library/react'
import React from 'react'

import { Page } from '../'

describe('<Page />', () => {
  it('SHOULD match snapshot', () => {
    const { asFragment } = render(<Page />)

    expect(asFragment()).toMatchSnapshot()
  })
})
