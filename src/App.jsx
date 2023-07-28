import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ok, { sayNow } from './utils/dates'
import FoodDetailsPage from './pages/FoodDetailsPage'

function App() {
  /* ok()
  sayNow() */
  return (
    <>
      <nav>
        <ul style={{ listStyle: 'none' }}>
          <li>
            {/* <a href='/'>Home</a> */}
            {/* <Link to='/'>Home</Link> */}
            <NavLink to='/' className={({ isActive }) => (isActive ? 'selected' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            {/* <a href='/contact'>Contact</a> */}
            {/* <Link to='/contact'>Contact</Link> */}
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'selected' : '')}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile' className={({ isActive }) => (isActive ? 'selected' : '')}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to='/foods' className={({ isActive }) => (isActive ? 'selected' : '')}>
              Foods
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<h1>ContactPage</h1>} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route
          path='/foods'
          element={
            <>
              <h1>All the foods</h1>
              <Link to='/foods/pizza'>Pizza</Link>
              <Link to='/foods/specialPizza?pep=true&cheese=extra'>Pizza with toppings</Link>
            </>
          }
        />
        <Route path='/foods/:foodId' element={<FoodDetailsPage />} />
        <Route path='/foods/pizza' element={<h1>Some pizza</h1>} />

        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
    </>
  )
}

export default App
