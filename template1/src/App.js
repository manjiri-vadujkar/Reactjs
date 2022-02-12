import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
