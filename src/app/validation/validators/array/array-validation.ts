// import { FieldValidation } from '~/app/validation/protocols'

// export class ArrayValidation implements FieldValidation {
//   constructor(readonly field: string, readonly schema: FieldValidation[]) {}

//   validate(formValues: FieldValidation.Params, fieldName: string): FieldValidation.ValidationError {
//     const fieldPath = fieldName.split('.')
//     const lastPath = fieldPath[fieldPath.length - 1]

//     const validations = this.schema.filter((item) => lastPath === item.field) ?? []

//     const input = {
//       [lastPath]: formValues[fieldName],
//     }

//     if (validations.length > 0) {
//       let error: Error | null = null
//       for (const validation of validations) {
//         if (error) return error
//         error = validation.validate(input)
//       }
//       if (error) return error
//     }

//     return null
//   }
// }
