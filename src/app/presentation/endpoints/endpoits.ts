import { RemoteLoadSpotsList } from '~/app/application/services'
import { AxiosHttpClient } from '~/app/infra/axios-http-client/axios-http-client'

const endpoints = {
  loadSpotsList: new RemoteLoadSpotsList(new AxiosHttpClient()),
}

export default endpoints
