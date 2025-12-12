<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { registerSchema } from './registerSchema' // ha külön fájlba tetted

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  birthYear: '',
  acceptTerms: false,
}

const handleSubmit = (values, { resetForm }) => {
  // itt csak konzolra logolunk / “sikeres regisztráció” üzenet
  console.log('Regisztrációs adatok:', values)
  alert('Sikeres regisztráció!')
  resetForm()
}
</script>

<template>
  <Form
    :validation-schema="registerSchema"
    :initial-values="initialValues"
    @submit="handleSubmit"
    v-slot="{ meta }"
    class="card"
  >
    <!-- Név -->
    <div class="form-row">
      <label for="name">Név</label>
      <Field id="name" name="name" type="text" />
      <ErrorMessage name="name" class="error" />
    </div>

    <!-- Email -->
    <div class="form-row">
      <label for="email">Email</label>
      <Field id="email" name="email" type="email" />
      <ErrorMessage name="email" class="error" />
    </div>

    <!-- Jelszó -->
    <div class="form-row">
      <label for="password">Jelszó</label>
      <Field id="password" name="password" type="password" />
      <ErrorMessage name="password" class="error" />
    </div>

    <!-- Jelszó ismétlés -->
    <div class="form-row">
      <label for="passwordConfirm">Jelszó ismét</label>
      <Field id="passwordConfirm" name="passwordConfirm" type="password" />
      <ErrorMessage name="passwordConfirm" class="error" />
    </div>

    <!-- Születési év -->
    <div class="form-row">
      <label for="birthYear">Születési év</label>
      <Field id="birthYear" name="birthYear" type="number" />
      <ErrorMessage name="birthYear" class="error" />
    </div>

    <!-- ÁSZF -->
    <div class="form-row checkbox-row">
      <Field id="acceptTerms" name="acceptTerms" type="checkbox" />
      <label for="acceptTerms">Elfogadom az ÁSZF-et</label>
    </div>
    <ErrorMessage name="acceptTerms" class="error" />

    <!-- Gomb – csak ha valid és volt módosítás -->
    <button type="submit" :disabled="!meta.valid || !meta.dirty">
      Regisztráció
    </button>
  </Form>
</template>