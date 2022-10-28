import { RequiredFieldError } from '~/app/validation/errors'
import { FieldValidation } from '~/app/validation/protocols'

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: FieldValidation.Params): FieldValidation.ValidationError {
    const inputData = input[this.field] as string
    const trimmedInput = inputData.trim()
    return trimmedInput ? null : new RequiredFieldError('errors.requiredField')
  }
}
