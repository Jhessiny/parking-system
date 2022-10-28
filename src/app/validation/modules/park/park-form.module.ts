import { ValidationBuilder, ValidationComposite } from '~/app/validation/validators'

export const PARK_FORM_VALIDATION = ValidationComposite.build([
  ...ValidationBuilder.field('licensePlate').required().min(7).build(),
  ...ValidationBuilder.field('maker').required().min(2).build(),
  ...ValidationBuilder.field('model').required().min(2).build(),
  ...ValidationBuilder.field('year').required().min(4).build(),
])
