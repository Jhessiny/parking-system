import { useEffect } from 'react'
import { useLoadSpotsList } from '~/app/presentation/hooks'
import { SpotsCanvas } from './components/spots-canvas/spots-canvas'

const Home = () => {
  const { data, isLoading, isError, loadSpotsListQuery } = useLoadSpotsList()

  const handleLoadSpotsListQuery = async () => await loadSpotsListQuery()

  useEffect(() => {
    void handleLoadSpotsListQuery()
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Something went wrong</p>

  return <div>{data?.isSuccess() && <SpotsCanvas spots={data?.value} />}</div>
}

export default Home
