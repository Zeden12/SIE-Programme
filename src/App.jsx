import React from "react"
import MainLayout from "./layouts/MainLayout"
import { BrowserRouter as Router, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import ProgramsPage from "./pages/ProgramsPage"
import CareerPage from "./pages/CareerPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
