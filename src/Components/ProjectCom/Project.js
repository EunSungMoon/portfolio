import './Project.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FriendsProject from './FriendsProject';
import SmartyProject from './SmartyProject';
import LottolottoProject from './LottolottoProject';
import MarketProject from './MarketProject';
import PortfoiloProject from './PortfoiloProject';


export default function Project() {
  return (
    <section id='project'>
      <div className='container projectWrap'>
        <div className='titleWrap'>
          <h1>PROJECTS</h1>
        </div>
        <FriendsProject />
        <LottolottoProject />
        <SmartyProject />
        <MarketProject />
        <PortfoiloProject />
      </div>
    </section>
  )
} 