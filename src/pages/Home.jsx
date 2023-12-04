import { useState } from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Home({page, setPage}) {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      home content
    </div>
  )
}

export default Home;
