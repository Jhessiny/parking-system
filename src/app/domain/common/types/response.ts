import { Either } from '../shared'
import {
  AccessDeniedError,
  FormError,
  InvalidCredentialsError,
  UnexpectedError,
} from '~/app/domain/common/exceptions'

export type ResponseError =
  | AccessDeniedError
  | InvalidCredentialsError
  | UnexpectedError
  | FormError

export type Response<R = unknown> = Either<ResponseError, R>
