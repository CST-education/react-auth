import { Formik } from 'formik'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
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

  const [showPassword, setshowPassword] = useState(false)

  const handleClickShowPassword = () => setshowPassword(!showPassword)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
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
              style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                maxWidth: '357px',
                width: '100%',
              }}
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

              <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  onBlur={handleBlur}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <br />
              <Button
                style={{ display: 'block', margin: '0 auto' }}
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
