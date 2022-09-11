import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import endpoints from '../../endpoints/endpoits'

const Home = () => {
  const { loadSpotsList } = endpoints
  const { data, refetch } = useQuery('spots', loadSpotsList.load.bind(loadSpotsList), {
    enabled: false,
    retry: false,
  })

  const handleClick = async () => {
    await refetch()
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Home
