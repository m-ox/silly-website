import { useEffect, useState } from 'react'
import About from './pages/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const [page, setPage] = useState("home")
  const [pageComp, setPageComp] = useState(<></>);

  return (
    <div className="content">
      <Header />
      <BrowserRouter basename="/">
        <Navbar page={page} setPage={setPage} />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;
