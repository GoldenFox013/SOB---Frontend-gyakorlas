import * as yup from 'yup'

export const registerSchema = yup.object({
  name: yup.string().required('Név kötelező').min(3, 'Legalább 3 karakter'),
  email: yup.string().required('Email kötelező').email('Érvénytelen email'),
  password: yup
    .string()
    .required('Jelszó kötelező')
    .min(6, 'Legalább 6 karakter'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'A jelszavak nem egyeznek')
    .required('Ismételd meg a jelszót'),
  birthYear: yup
    .number()
    .typeError('Évszámot adj meg')
    .required('Születési év kötelező')
    .min(1900, '1900 után legyen')
    .max(2010, '2010 előtt legyen'),
  acceptTerms: yup
    .boolean()
    .oneOf([true], 'El kell fogadni az ÁSZF-et'),
})