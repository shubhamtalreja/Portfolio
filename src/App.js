import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-[url('./assets/img/banner-bg.png')]">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </Router> */}
      <Navbar/>
    </div>
  );
}

export default App;
