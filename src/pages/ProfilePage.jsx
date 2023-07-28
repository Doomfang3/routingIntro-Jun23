import { Navigate, useLocation } from 'react-router-dom'

const isAuthenticated = true

const ProfilePage = () => {
  const location = useLocation()

  return isAuthenticated ? (
    <>
      <h1>Profile</h1>
    </>
  ) : (
    <Navigate to='/contact' />
  )
}

export default ProfilePage
