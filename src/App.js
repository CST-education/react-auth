import { Suspense, lazy, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import logo from './assets/icons/logo.svg'

const Home = lazy(() => import('./pages/HomePage/HomePage'))
const Register = lazy(() => import('./pages/RegisterPage/RegisterPage'))
const Login = lazy(() => import('./pages/LoginPage/LoginPage'))
const NotFound = lazy(() => import('./pages/NotFound/NotFoundPage'))

function App() {
  const isAuth = true
  const logout = useCallback(() => {
    console.log(`logout`)
  }, [])
  return (
    <>
      <header className="app-header">
        <div className="logo-wrapper">
          <img className="app-logo" src={logo} alt="logo" width="64" />
          <h1>Sandra</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              {isAuth ? (
                <button onClick={logout}>logout</button>
              ) : (
                <ul>
                  <li>
                    <NavLink to="/register">register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">login</NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback="loading...">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <footer className="app-footer">
        <p>&copy; Sandra Hrevtsova 2021</p>
      </footer>
    </>
  )
}

export default App
