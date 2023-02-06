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
import Careers from './pages/careers/Careers'
import { careersLoader } from './pages/careers/Careers'
import CareerDetails from './pages/careers/CareerDetails'
import { careerDetailsLoader } from './pages/careers/CareerDetails'
import CareersError from './pages/careers/CareerError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='careers' errorElement={<CareersError />}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=':id'
          loader={careerDetailsLoader}
          element={<CareerDetails />}
        />
      </Route>
      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App
