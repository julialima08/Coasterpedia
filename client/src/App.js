import './CSS/App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Child from './pages/Child'
import Adult from './pages/Adult'
import AdultDetailsPage from './pages/AdultDetailsPage'
import KidDetailsPage from './pages/KidDetailsPage'

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
          <Route path="/kidRideDetails/:id" element={<KidDetailsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
