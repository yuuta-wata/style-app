import { FC, useEffect, useRef } from 'react'

import { Canvas } from '../../../presentational/atoms/canvas'

import { Props } from './type'

export const ThreeDimensions: FC<Props> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    console.log('canvasRef:', canvasRef)
    if (canvasRef.current) {
      const canvas = canvasRef.current
      // if (!canvas) throw new Error('canvas error ...')
      console.log('canvasREF')
      const glCtx = canvas.getContext('webgl')
      if (!glCtx) throw new Error('webgl error')

      glCtx.clearColor(0.0, 0.0, 0.0, 1.0)
      glCtx.clear(glCtx.COLOR_BUFFER_BIT)
    }
  }, [])

  return <Canvas width='640' height='480' ref={canvasRef} />
}
