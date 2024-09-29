import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { CartFood } from '../Pages/CartFood'
import { CreateFood } from '../Pages/CreateFood'
import { Navbar } from '../components/Navbar'

export function AdminRoutes() {
  const userDefault = false
  const isVisible = !['/login', '/register'].includes(location.pathname)

  return (
    <>
      {isVisible && <Navbar userDefault={userDefault} />}
      <Routes>
        <Route
          path="/"
          element={<Home userDefault={userDefault} />}
        />
        <Route
          path="/new/:id"
          element={<CartFood userDefault={userDefault} />}
        />
        <Route
          path="/create"
          element={<CreateFood />}
        />
        <Route
          path="/edit/:id"
          element={<CreateFood />}
        />
        <Route
          path="*"
          element={<Home userDefault={userDefault} />}
        />
      </Routes>
    </>
  )
}
