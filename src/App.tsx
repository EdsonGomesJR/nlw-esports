import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState, useEffect } from 'react';
import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';
import { AdsPage } from './components/AdsPage';
import { NavBar } from './components/NavBar';

interface Game {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios(
      'https://3333-edsongomesj-servernlwes-1lh39sgpi82.ws-us65.gitpod.io/games'
    ).then((response) => {
      setGames(response.data);
    });
  }, []);

  function Teste() {
    return <h1> teste </h1>;
  }

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <Router>
        <img src={logoImg} alt="" />
        <h1 className="text-6xl text-white font-black mt-20">
          Seu{' '}
          <span className=" bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text text-transparent">
            duo
          </span>{' '}
          está aqui.
        </h1>
        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map((game) => {
            return (
              <>
                <GameBanner
                  key={game.id}
                  title={game.title}
                  bannerUrl={game.bannerUrl}
                  adsCount={game._count.ads}
                />
              </>
            );
          })}
        </div>

        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
        </Dialog.Root>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/navbar" element={<NavBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
