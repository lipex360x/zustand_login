import { useEffect } from 'react'
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
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
  })

  const { mutateLogin, isLoading, error } = useLogin()

  const submitForm = async (data: FormInputs) => {
    await mutateLogin(data)
  }

  useEffect(() => {
    setFocus('username')
  }, [setFocus])

  useEffect(() => {
    if (error) return reset()
  }, [error, reset])

  return (
    <S.Form onSubmit={handleSubmit(submitForm)}>
      <FormContainer>
        <TextField
          placeholder="UserName"
          required
          textError={errors.username?.message}
          {...register('username')}
        />

        <TextField
          placeholder="Password"
          required
          type="password"
          textError={errors.password?.message}
          {...register('password')}
        />

        <Button disabled={isSubmitting} type="submit" fullWidth>
          Login
        </Button>

        {isLoading && (
          <p style={{ color: 'white', textAlign: 'center' }}>Loading...</p>
        )}
      </FormContainer>
    </S.Form>
  )
}
