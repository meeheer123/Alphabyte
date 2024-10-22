
import HomePage from '../src/components/HomePage/HomePage';
import ErrorClassificationDashboard from "./components/ErrorClassificationDashborad"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error-classification-dashboard" element={<ErrorClassificationDashboard />} />
        </Routes>
      </Router>


    </>
  )
}

export default App