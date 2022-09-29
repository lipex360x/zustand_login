import * as z from 'zod'

const formSchema = z.object({
  username: z.string().trim().min(1, 'Campo não pode estar vazio'),
  password: z.string(),
})

export default formSchema
export type FormInputs = z.infer<typeof formSchema>
