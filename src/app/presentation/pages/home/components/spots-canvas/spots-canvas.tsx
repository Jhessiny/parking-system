import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Stage, Layer } from 'react-konva'
import { useLocation, useNavigate } from 'react-router'
import { SpotModel } from '~/app/domain/models'
import { SpotCanvasItem, ParkForm, UnparkModal } from './components'
import styles from './spots-canvas.module.scss'

interface Props {
  spots: SpotModel[]
}

export const SpotsCanvas = memo(({ spots }: Props) => {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [isParkFormOpen, setIsParkFormOpen] = useState(false)
  const [isUnparkModalOpen, setIsUnparkModalOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const spotsLeft = spots.slice(0, spots.length / 2)
  const spotsRight = spots.slice(spots.length / 2)
  const center = window.innerWidth / 2
  const parkingWidth = 450
  const parkingX = center - parkingWidth / 2

  const toggleParkModal = (id: string) => {
    const params = new URLSearchParams(location.search)
    setIsParkFormOpen((prev) => !prev)
    if (params.get('spot')) params.delete('spot')
    else params.set('spot', id)
    navigate(`?${params.toString()}`)
  }

  const toggleUnParkModal = () => {
    setIsUnparkModalOpen((prev) => !prev)
  }

  const resizeCanvas = useCallback(() => {
    if (containerRef.current)
      setSize({
        width: containerRef.current?.clientWidth,
        height: containerRef.current?.clientHeight,
      })
  }, [containerRef.current])

  useEffect(() => {
    window.addEventListener('resize', resizeCanvas)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      setSize({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      })
    }
  }, [containerRef])

  return (
    <div ref={containerRef} className={styles.root}>
      <Stage width={size.width} height={size.height}>
        <Layer x={parkingX}>
          {spotsLeft.map((spot, index) => (
            <SpotCanvasItem
              id={spot.id}
              occupied={spot.occupied}
              x={0}
              key={`spot-${spot.id}`}
              index={index}
              handlePark={toggleParkModal}
              handleUnpark={toggleUnParkModal}
            />
          ))}
          {spotsRight.map((spot, index) => (
            <SpotCanvasItem
              id={spot.id}
              occupied={spot.occupied}
              x={250}
              key={`spot-${spot.id}`}
              index={index}
              handlePark={toggleParkModal}
              handleUnpark={toggleUnParkModal}
            />
          ))}
        </Layer>
      </Stage>
      <ParkForm isOpen={isParkFormOpen} handleClose={toggleParkModal} />
      <UnparkModal isOpen={isUnparkModalOpen} handleClose={toggleUnParkModal} />
    </div>
  )
})

SpotsCanvas.displayName = 'SpotsCanvas'
