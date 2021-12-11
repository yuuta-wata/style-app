import { forwardRef } from 'react'

import { Props } from './type'

export const Canvas = forwardRef<HTMLCanvasElement, Props>(({ children, ...props }, ref) => (
  <canvas {...props} ref={ref}>
    {children}
  </canvas>
))
