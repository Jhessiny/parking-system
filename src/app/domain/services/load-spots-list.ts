import { RemoteSpotModel } from '~/app/application/models/remote-load-spots-list'
import { LoadFunction } from '~/app/domain/common/types'
export interface LoadSpotsList extends LoadFunction<RemoteSpotModel[], void> {}
