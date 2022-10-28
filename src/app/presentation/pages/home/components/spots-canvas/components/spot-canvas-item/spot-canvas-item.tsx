import { useCallback } from 'react'
import { Rect, Text, Image } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node'
import {
  carImage,
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  PADDING,
  SPOT_HEIGHT,
  SPOT_WIDTH,
  TEXT_HEIGHT,
  TEXT_WIDTH,
} from '~/app/presentation/pages/home/constants'

interface Props {
  id: string
  occupied: boolean
  car?: unknown
  x: number
  index: number
  handlePark: (id: string) => void
  handleUnpark: (id: string) => void
}

export function SpotCanvasItem({ id, occupied, car, x, index, handlePark, handleUnpark }: Props) {
  const getRectY = (index: number) => SPOT_HEIGHT * (index + 1) + PADDING * index

  const getTextX = useCallback((rectX: number) => {
    return rectX + SPOT_WIDTH / 2 - TEXT_WIDTH / 2
  }, [])

  const getTextY = useCallback((rectY: number) => {
    return rectY + SPOT_HEIGHT / 2 - TEXT_HEIGHT / 2
  }, [])

  const getImageX = (rectX: number) => {
    return rectX + SPOT_WIDTH / 2 - IMAGE_WIDTH / 2
  }
  const getImageY = (rectY: number) => {
    return rectY + SPOT_HEIGHT / 2 - IMAGE_HEIGHT / 2
  }

  const handleClick = (occupied: boolean, id: string) => {
    if (occupied) {
      return handleUnpark(id)
    }
    handlePark(id)
  }

  const handleMouseOver = useCallback((event: KonvaEventObject<MouseEvent>) => {
    const container = event.target.getStage()!.container()
    container.style.cursor = 'pointer'
  }, [])

  const handleMouseLeave = useCallback((event: KonvaEventObject<MouseEvent>) => {
    const container = event.target.getStage()!.container()
    container.style.cursor = 'default'
  }, [])
  return (
    <>
      <Rect
        key={id}
        x={x}
        y={getRectY(index)}
        fill={'#20067425'}
        width={SPOT_WIDTH}
        height={SPOT_HEIGHT}
        stroke={'#20067452'}
        onClick={() => handleClick(occupied, id)}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      ></Rect>
      <Text
        key={`text-${id}`}
        text='park'
        x={getTextX(x)}
        y={getTextY(getRectY(index))}
        onClick={() => handleClick(occupied, id)}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
      {occupied && (
        <Image
          key={`car-${id}`}
          x={getImageX(x)}
          y={getImageY(getRectY(index))}
          image={carImage()}
          onClick={() => handleClick(occupied, id)}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </>
  )
}
