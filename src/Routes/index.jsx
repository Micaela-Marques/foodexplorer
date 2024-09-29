import { BrowserRouter } from 'react-router-dom'
import { ROLES } from '../utils/roles'

import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth'
import { CustomerRoutes } from './customer.routes'

export function Routes() {
  const { user } = useAuth()

  function AccessRoutes() {
    switch(user.role) {
      case ROLES.ADMIN:
        return <AdminRoutes />
      case ROLES.CUSTOMER:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
