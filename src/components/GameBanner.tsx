import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AdsPage } from './AdsPage';

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

function handleClickCard(title: string) {
  console.log('cliquei: ', title);
}

export function GameBanner(props: GameBannerProps) {
  return (
    <Link
      onClick={() => handleClickCard(props.title)}
      to="/navbar"
      className="relative rounded-lg overflow-hidden"
    >
      <img src={props.bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} {props.adsCount <= 1 ? 'anúncio' : 'anúncios'}
        </span>
      </div>
    </Link>
  );
}
