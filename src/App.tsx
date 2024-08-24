import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"

function App() {
  // Código TypeScript
  return (
    // Código TSX => HTML + CSS
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/home" element={ <Home />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
