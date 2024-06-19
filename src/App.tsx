import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Sample1 from './components/Sample1'
import Sample2 from './components/Sample2'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/sample1">Sample1</Link>
          <Link to="/sample2">Sample2</Link>
        </nav>
        <Routes>
          <Route path='/sample1' element={<Sample1 />} />
          <Route path='/sample2' element={<Sample2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
