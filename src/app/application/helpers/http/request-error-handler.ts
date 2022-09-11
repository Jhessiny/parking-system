import { Response } from '~/app/domain/common/types'
import { HttpResponse, HttpStatusCode } from '../../protocols/http/http-client'
import { error, success } from '~/app/domain/common/shared'
import { UnexpectedError } from '~/app/domain/common/exceptions'

export class RequestErrorHandler<R> {
  private constructor(private readonly _response: R) {
    Object.freeze(this)
  }

  public static handle<R>(httpResponse: HttpResponse<R>): Response<RequestErrorHandler<R>> {
    const { statusCode } = httpResponse

    if (this.isSuccess(statusCode) && httpResponse.body?.data) {
      return success(new RequestErrorHandler(httpResponse.body?.data))
    }

    return error(new UnexpectedError())
  }

  private static isSuccess(statusCode: HttpStatusCode): boolean {
    return statusCode >= 200 && statusCode <= 299
  }

  get response(): R {
    return this._response
  }
}
