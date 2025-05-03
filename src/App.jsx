import React from "react"
import MainLayout from "./layouts/MainLayout"
import { BrowserRouter as Router, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
