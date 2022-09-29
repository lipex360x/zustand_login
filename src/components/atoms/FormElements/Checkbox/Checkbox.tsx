import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  labelFor?: string
  labelColor?: 'black' | 'white'
  value?: string | ReadonlyArray<string> | number | undefined
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({
  onCheck,
  label,
  labelFor = '',
  isChecked = false,
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)
    !!onCheck && onCheck(status)
  }

  return (
    <S.Input
      id={labelFor}
      type="checkbox"
      onChange={onChange}
      checked={checked}
      value={value}
      {...props}
    />
  )
}
