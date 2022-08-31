import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from '../components/Navbar';
import { AuthContextProvider } from '../context/AuthContext';
import { useRouter } from 'next/router';
import ProtectedRoute from '../components/ProtectedRoute';

function MyApp({ Component, pageProps }: AppProps) {
  const nonProtectedRoutes = ['/', '/login', '/signup']
  const router = useRouter()
  return (
    <AuthContextProvider>
      <NavbarComp></NavbarComp>
      {
        nonProtectedRoutes.includes(router.pathname) ? 
          <Component {...pageProps} /> :
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
      }
    </AuthContextProvider>
  )
}

export default MyApp
