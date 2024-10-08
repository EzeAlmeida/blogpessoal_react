import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import { AuthProvider } from "./contexts/AuthContext"
import ListaTemas from "./components/temas/listaTemas/ListaTemas"
import DeletarTema from "./components/temas/deletarTema/DeletarTema"
import FormTema from "./components/temas/formularioTema/FormularioTema"


function App() {
  // Código TypeScript

  return (
    // Código TSX => HTML + CSS
    <>
      {/* 
          Envolvemos todos os Componentes inseridos no Componente App, 
          com o Componente AuthProvider. 
          Desta forma, todos os Componentes dentro dele, terão acesso 
          aos Estados e Funções guardados na context.
      */}
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App