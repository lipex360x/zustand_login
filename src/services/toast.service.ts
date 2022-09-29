import { toast } from 'react-hot-toast'

export const success = (content: string) => {
  return toast.success(content)
}

export const error = (content: string) => {
  return toast.error(content)
}

export const loading = (content: string) => {
  return toast.loading(content)
}

export const dismiss = () => {
  toast.dismiss()
}

export const promise = (
  promise: Promise<any>,
  content: string,
  success: string,
  error: string,
) => {
  toast.promise(promise, {
    loading: content,
    success,
    error,
  })
}
