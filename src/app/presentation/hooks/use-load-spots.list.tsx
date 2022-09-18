import { useQuery } from 'react-query'
import endpoints from '~/app/presentation/endpoints/endpoits'

export const useLoadSpotsList = () => {
  const { loadSpotsList } = endpoints
  const { data, isLoading, isError, refetch } = useQuery(
    'spots',
    loadSpotsList.load.bind(loadSpotsList),
    {
      enabled: false,
      retry: false,
    },
  )

  return {
    loadSpotsListQuery: refetch,
    isLoading,
    data,
    isError,
  }
}
