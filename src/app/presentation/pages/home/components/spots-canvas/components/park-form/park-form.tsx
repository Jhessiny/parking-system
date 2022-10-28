import { useCallback } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { ParkFormModel } from '~/app/domain/models'
import { TextInput, BasicModal, Button } from '~/app/presentation/components'
import { PARK_FORM_VALIDATION } from '~/app/validation/modules'
import { ValidationBuilder } from '~/app/validation/validators'
import * as yup from 'yup'
import styles from './park-form.module.scss'

interface Props {
  isOpen: boolean
  handleClose: (id: string) => void
}

const useYupValidationResolver = (validationSchema: any) =>
  useCallback(
    async (data: any) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        })

        return {
          values,
          errors: {},
        }
      } catch (errors: any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {},
          ),
        }
      }
    },
    [validationSchema],
  )

const validationSchema: yup.SchemaOf<ParkFormModel> = yup
  .object()
  .shape({
    licensePlate: yup.string().required('Required'),
    maker: yup.string().required('Required'),
    model: yup.string().required('Required'),
    year: yup.string().required('Required'),
  })
  .required()

export const ParkForm = ({ isOpen, handleClose }: Props) => {
  const resolver = useYupValidationResolver(validationSchema)
  const methods = useForm<ParkFormModel>({
    mode: 'onBlur',
    resolver,
  })

  const onSubmit = (data: ParkFormModel) => console.log(data)
  return (
    <BasicModal isOpen={isOpen} handleClose={handleClose}>
      <FormProvider {...methods}>
        <div className={styles.root}>
          <h2>Fill the form to park your car</h2>
          <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
            <TextInput
              wrapperClass={styles.inputWrapper}
              className={styles.input}
              label='license plate'
              placeholder='license plate'
              name='licensePlate'
            />
            <TextInput
              wrapperClass={styles.inputWrapper}
              className={styles.input}
              label='maker'
              placeholder='maker'
              name='maker'
            />
            <TextInput
              wrapperClass={styles.inputWrapper}
              className={styles.input}
              label='model'
              placeholder='model'
              name='model'
            />
            <TextInput
              wrapperClass={styles.inputWrapper}
              className={styles.input}
              label='year'
              placeholder='year'
              name='year'
            />
            <TextInput
              wrapperClass={styles.inputWrapper}
              label='spot'
              className={styles.input}
              placeholder='spot'
              readOnly
              defaultValue={12}
              name='spotId'
            />
            <Button type='submit' className={styles.button}>
              park
            </Button>
            <Button className={styles.button} variant='error' onClick={() => handleClose('')}>
              cancel
            </Button>
          </form>
        </div>
      </FormProvider>
    </BasicModal>
  )
}
