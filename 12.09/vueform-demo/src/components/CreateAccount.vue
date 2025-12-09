<template>
  <form @submit.prevent="onSubmit" class="form-container">
    <h2>Create Account</h2>

    <Form v-slot="{ isValid }">
      <!-- Full name -->
      <div class="field">
        <label class="label">Full Name *</label>
        <Field
          name="name"
          as="input"
          class="input"
          placeholder="Enter your full name"
          rules="required|min:2"
        />
        <ErrorMessage name="name" class="error" />
      </div>

      <!-- Email -->
      <div class="field">
        <label class="label">Email *</label>
        <Field
          name="email"
          type="email"
          class="input"
          placeholder="your@email.com"
          rules="required|email"
        />
        <ErrorMessage name="email" class="error" />
      </div>

      <!-- Password -->
      <div class="field">
        <label class="label">Password *</label>
        <Field
          name="password"
          type="password"
          class="input"
          placeholder="Minimum 8 characters"
          rules="required|min:8"
        />
        <ErrorMessage name="password" class="error" />
      </div>

      <!-- Terms -->
      <div class="checkbox-field">
        <Field
          name="terms"
          type="checkbox"
          class="checkbox"
          rules="required"
        />
        <label class="checkbox-label">I agree to Terms &amp; Conditions *</label>
      </div>
      <ErrorMessage name="terms" class="error" />

      <!-- Submit -->
      <button type="submit" :disabled="!isValid" class="submit-btn">
        Create Account
      </button>
    </Form>
  </form>
</template>

<script>
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

export default {
  name: 'CreateAccount',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      // A Form komponens automatikusan átadja az értékeket,
      // de itt a példában csak konzolra írunk
      console.log('Form sikeres:', values)
      alert('Account created!')
    },
  },
}
</script>

<style scoped>
.form-container {
  max-width: 420px;
  margin: 40px auto;
  padding: 24px 28px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #111827;
}

.field {
  margin-bottom: 16px;
}

.label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 1px #2563eb33;
}

.checkbox-field {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #374151;
}

.checkbox {
  width: 16px;
  height: 16px;
}

.checkbox-label {
  cursor: pointer;
}

.submit-btn {
  width: 100%;
  margin-top: 8px;
  padding: 10px 14px;
  border: none;
  border-radius: 9999px;
  background: linear-gradient(90deg, #2563eb, #1d4ed8);
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease;
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.95;
  transform: translateY(-1px);
}

.submit-btn:disabled {
  background: #9ca3af;
  box-shadow: none;
  cursor: not-allowed;
}

.error {
  margin-top: 4px;
  font-size: 13px;
  color: #dc2626;
}
</style>