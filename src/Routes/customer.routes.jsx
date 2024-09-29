import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { CartFood } from '../Pages/CartFood'
import { Navbar } from '../components/Navbar'

export function CustomerRoutes() {
  const location = useLocation()
  const userDefault = true
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
          path="/cart/:id"
          element={<CartFood userDefault={userDefault} />}
        />
        <Route
          path="*"
          element={<Home userDefault={userDefault} />}
        />
      </Routes>
    </>
  )
}
