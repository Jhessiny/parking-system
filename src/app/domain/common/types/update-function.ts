import { Response } from './response'

export interface UpdateFunction<R, P = unknown> {
  update: (params: P) => Promise<Response<R>>
}
