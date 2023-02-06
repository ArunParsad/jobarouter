import {
  createBrowserRouter,
  Routes,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Route>
      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App
