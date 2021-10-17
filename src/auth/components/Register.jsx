import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
const INIT_VALUES = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
}

export const RegisterForm = () => {
  const toValidate = useCallback((values) => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 5) {
      errors.name = 'Invalid name. It should have at least 5 symbols '
    }

    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 8) {
      errors.password = 'Invalid password. It should have at least 8 symbols '
    }
    if (!values.repeatPassword) {
      errors.repeatPassword = 'Required'
    } else if (values.repeatPassword !== values.password) {
      errors.repeatPassword = 'Invalid repeat password. Please try again!'
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
        {({ isSubmitting, touched, errors }) => (
          <Form>
            <label htmlFor="name">name</label>
            <br />
            <Field id="name" type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <br />
            <label htmlFor="email">email</label>
            <br />

            <Field id="email" type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <br />
            <label htmlFor="password">password</label>
            <br />

            <Field id="password" type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <br />
            <label htmlFor="repeatPassword">repeat password</label>
            <br />

            <Field id="repeatPassword" type="password" name="repeatPassword" />
            <ErrorMessage name="repeatPassword" component="div" />
            <br />

            <Button
              type="submit"
              variant="contained"
              disabled={
                isSubmitting ||
                !(
                  Object.keys(touched).length ===
                    Object.keys(INIT_VALUES).length &&
                  Object.keys(errors).length === 0
                )
              }
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Link to="/login">login</Link>
    </div>
  )
}
