import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Child from './pages/Child'
import Adult from './pages/Adult'
import AdultDetailsPage from './pages/AdultDetailsPage'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids" element={<Child />} />
          <Route path="/adults" element={<Adult />} />
          <Route path="adultRideDetails/:id" element={<AdultDetailsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
