import { useCallback } from 'react'
import { Rect, Text, Image } from 'react-konva'
import { KonvaEventObject } from 'konva/lib/Node'
import { PADDING } from '../../constants'

interface Props {
  id: string
  occupied: boolean
  car?: unknown
  x: number
  index: number
}

function SpotCanvasItem({ id, occupied, car, x, index }: Props) {
  const getRectY = (index: number) => 50 * (index + 1) + PADDING * index

  const getTextX = (rectX: number) => {
    const textWidth = 23.34
    return rectX + 100 / 2 - textWidth / 2
  }
  const getTextY = (rectY: number) => {
    const textHeight = 12
    return rectY + 50 / 2 - textHeight / 2
  }

  const getImageX = (rectX: number) => {
    const imageWidth = 90
    return rectX + 100 / 2 - imageWidth / 2
  }
  const getImageY = (rectY: number) => {
    const imageHeight = 45
    return rectY + 50 / 2 - imageHeight / 2
  }

  const carImage = () => {
    const image = new window.Image()
    image.src = '/src/assets/car.png'
    image.width = 90
    image.height = 45
    return image
  }

  const handleClick = (occupied: boolean, id: string) => {
    if (occupied) {
      console.log('unpark modal')
    }
    // setOpen(true)
  }

  const handleMouseOver = useCallback((event: KonvaEventObject<MouseEvent>) => {
    const container = event.target.getStage()?.container()
    if (container) container.style.cursor = 'pointer'
  }, [])

  const handleMouseLeave = useCallback((event: KonvaEventObject<MouseEvent>) => {
    const container = event.target.getStage()?.container()
    if (container) container.style.cursor = 'default'
  }, [])
  return (
    <>
      <Rect
        key={id}
        x={x}
        y={getRectY(index)}
        fill={'#20067425'}
        width={100}
        height={50}
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

export default SpotCanvasItem
