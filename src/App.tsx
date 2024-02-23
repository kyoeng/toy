import { useRef } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Header from './components/header/Header';

function App() {
  const container = useRef<HTMLDivElement>(null);



  return (
    <div id='container' ref={container}>
      <Router>
        <Header />

        <div id='main'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}



export default App
