import { LoadFunction } from '~/app/domain/common/types'
import { SpotModel } from '../models'
export interface LoadSpotsList extends LoadFunction<SpotModel[], void> {}
