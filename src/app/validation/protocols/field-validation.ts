export interface FieldValidation {
  field: string
  validate: (
    formValues: FieldValidation.Params,
    ...args: unknown[]
  ) => FieldValidation.ValidationError
}

export namespace FieldValidation {
  export type ValidationError = Error | null

  export type Params<T = any> = {
    [field: string]: string | boolean | number | object | T[]
  }
}
