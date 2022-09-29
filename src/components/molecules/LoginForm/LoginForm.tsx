import { useForm } from 'react-hook-form'

import { Button } from '@/components/atoms/Button'
import { TextField } from '@/components/atoms/FormElements/TextField'
import { FormContainer } from '@/components/bosons/FormContainer'
// import * as toastService from '@/services/toast.service'
import { zodResolver } from '@hookform/resolvers/zod'

import formSchema, { FormInputs } from './form.schema'
import * as S from './styles'
import useLogin from './useLogin'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
  })

  const { mutateLogin, isLoading } = useLogin()

  const submitForm = async (data: FormInputs) => {
    await mutateLogin(data)
  }

  return (
    <S.Form onSubmit={handleSubmit(submitForm)}>
      <FormContainer>
        <TextField
          placeholder="Type UserName"
          required
          textError={errors.username?.message}
          {...register('username')}
        />

        <TextField
          placeholder="Type email"
          required
          type="password"
          textError={errors.password?.message}
          {...register('password')}
        />

        <Button disabled={isSubmitting} type="submit" fullWidth>
          Login
        </Button>

        {isLoading && (
          <p style={{ color: 'white', textAlign: 'center' }}>Carregando</p>
        )}
      </FormContainer>
    </S.Form>
  )
}
