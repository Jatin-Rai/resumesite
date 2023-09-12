import { BsMoonStarsFill, BsSun } from 'react-icons/bs';

import Brand from './assets/brand.png'

import { Layout } from "./pages";
import { useEffect, useState } from "react";
import { AnimatedRoutes } from './components';
import Loading from './components/Loading/Loading';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prevState => !prevState);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])


  return (
    <>
      {loading
        ? <Loading />
        : (<div className={` ${darkMode ? 'dark' : ''}`}>
          <div
            className='group fixed bottom-12 right-4 sm:right-6 lg:right-12 z-50 border rounded-full bg-cyan-950 p-3 dark:bg-white shadow cursor-pointer'
            onClick={toggleDarkMode}
          >
            {darkMode
              ? <BsSun className='text-3xl text-yellow-500 group-hover:animate-spin' />
              : <BsMoonStarsFill className='group-hover:animate-bounce text-3xl text-gray-200' />
            }
          </div>

          <Layout>
            <img src={Brand} className="sm:hidden absolute top-4 left-8 dark:filter dark:invert" alt="Jatin Rai" />
            <AnimatedRoutes />
          </Layout>
        </div>
        )
      }
    </>

  );
}

export default App;
