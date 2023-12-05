import { useState } from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PetGame from '../components/PetGame';

function Home({page, setPage}) {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      <div className="home__main-content">
        <p>
          Hello, welcome to my silly website. I am using this as a space to replicate cute or cool things I find online. :) For now I'm working on a gifypet clone/improvement game. You can only gamble all your money away before you restart and options are generally limited so I wanted to improve upon a fun concept for myself :D
        </p>
        <PetGame />
      </div>
    </div>
  )
}

export default Home;
