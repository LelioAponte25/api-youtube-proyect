import { Route, Routes } from "react-router-dom"
import HomePageTube from "./pages/HomePageTube" 
import ProtectedRoutes from "./pages/ProtectedRoutes"
import TubePage from "./pages/TubePage"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePageTube/>} />
        <Route element={<ProtectedRoutes/> }>
          <Route path="/tubePage" element={<TubePage/>} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
