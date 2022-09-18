import { memo, useState } from 'react'
import { Stage, Layer } from 'react-konva'
import { SpotModel } from '~/app/domain/models'
import { BasicModal } from '~/app/presentation/components/modal/modal'
import SpotCanvasItem from './components/spot-canvas-item'

interface Props {
  spots: SpotModel[]
}

export const SpotsCanvas = memo(({ spots }: Props) => {
  const [isOpen] = useState(false)

  const spotsLeft = spots.slice(0, spots.length / 2)
  const spotsRight = spots.slice(spots.length / 2)
  const center = window.innerWidth / 2
  const parkingWidth = 450
  const parkingX = center - parkingWidth / 2
  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer x={parkingX}>
          {spotsLeft.map((spot, index) => (
            <SpotCanvasItem
              id={spot.id}
              occupied={spot.occupied}
              x={0}
              key={`spot-${spot.id}`}
              index={index}
            />
          ))}
          {spotsRight.map((spot, index) => (
            <SpotCanvasItem
              id={spot.id}
              occupied={spot.occupied}
              x={250}
              key={`spot-${spot.id}`}
              index={index}
            />
          ))}
        </Layer>
      </Stage>
      <BasicModal isOpen={isOpen} />
    </>
  )
})

SpotsCanvas.displayName = 'SpotsCanvas'
