import { FC } from 'react'

import { Props } from './type'

export const Button: FC<Props> = ({ style, onClick, children }) => (
  <button style={style} onClick={onClick}>
    {children}
  </button>
)
