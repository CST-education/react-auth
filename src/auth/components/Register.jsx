import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useCallback } from 'react'
const INIT_VALUES = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
}

export const RegisterForm = () => {
  const toValidate = useCallback((values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
  }, [])
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }
  return (
    <div>
      <h1>Registration</h1>
      <Formik
        initialValues={INIT_VALUES}
        validate={toValidate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />

            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />

            <Field type="password" name="repeatPassword" />
            <ErrorMessage name="repeatPassword" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
