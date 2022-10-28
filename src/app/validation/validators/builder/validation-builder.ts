import { FieldValidation } from '~/app/validation/protocols'
import {
  RequiredFieldValidation,
  EmailValidation,
  MinLegthValidation,
  MaxLengthValidation,
} from '~/app/validation/validators'

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: FieldValidation[],
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email(): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  min(length: number): ValidationBuilder {
    this.validations.push(new MinLegthValidation(this.fieldName, length))
    return this
  }

  max(length: number): ValidationBuilder {
    this.validations.push(new MaxLengthValidation(this.fieldName, length))
    return this
  }

  // array(schema: FieldValidation[]): ValidationBuilder {
  //   this.validations.push(new ArrayValidation(this.fieldName, schema))
  //   return this
  // }

  build(): FieldValidation[] {
    return this.validations
  }
}
