import { useEffect } from 'react'
import { useLoadSpotsList } from '~/app/presentation/hooks'

const Home = () => {
  const { data, loadSpotsListQuery } = useLoadSpotsList()

  const handleClick = async (id: string) => {
    await loadSpotsListQuery()
  }

  useEffect(() => {
    console.log(data?.value)
  }, [data])

  return (
    <div>
      <button onClick={async () => await handleClick('123')}>click</button>
    </div>
  )
}

export default Home
