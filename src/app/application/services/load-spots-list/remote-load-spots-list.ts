import { Response } from '~/app/domain/common/types'
import { LoadSpotsList } from '~/app/domain/services'
import { RequestErrorHandler } from '~/app/application/helpers'
import { error, success } from '~/app/domain/common/shared'
import { HttpClient } from '~/app/application/protocols'

export class RemoteLoadSpotsList implements LoadSpotsList {
  constructor(private readonly httpClient: HttpClient<RemoteLoadSpotsList.Model[]>) {}

  async load(): Promise<Response<RemoteLoadSpotsList.Model[]>> {
    const httpResponse = await this.httpClient.request({
      url: 'http://localhost:3000/spots',
      method: 'get',
    })

    const spotsListRequestResponse =
      RequestErrorHandler.handle<RemoteLoadSpotsList.Model[]>(httpResponse)

    if (spotsListRequestResponse.isError()) {
      return error(spotsListRequestResponse.value)
    }

    return success(spotsListRequestResponse.value.response)
  }
}

export namespace RemoteLoadSpotsList {
  export interface Model {
    id: string
    parkedCar?: unknown
    occupied: boolean
  }
}
