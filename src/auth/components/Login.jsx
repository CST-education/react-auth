import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
const INIT_VALUES = {
  email: '',
  password: '',
}

export const LoginForm = () => {
  const toValidate = useCallback((values) => {
    const errors = {}
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
      <h1>Login</h1>
      <Formik
        initialValues={INIT_VALUES}
        validate={toValidate}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          touched,
          errors,
          values,
          handleBlur,
          handleChange,
        }) => {
          console.log(touched, errors)
          return (
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '35ch' },
              }}
            >
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                onBlur={handleBlur}
              />
              <br />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                onBlur={handleBlur}
              />
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
            </Box>
          )
        }}
      </Formik>

      <Link to="/register">register</Link>
    </div>
  )
}
