import './App.css';
import Header  from './components/header/header';
import MiniInfoGiver from './components/miniInfoGiver/miniInfoGiver';
import CardWrapper from './components/cardWrapper/cardWrapper';
import HeroInfoWrapper from './components/heroInfoWrapper/heroInfoWrapper';
function App() {
  return (
    <div>
      <Header/>
      <MiniInfoGiver/>
      <div className='heros container'>
        <CardWrapper/>
        <HeroInfoWrapper/>
      </div>
    </div>
  );
}

export default App;
