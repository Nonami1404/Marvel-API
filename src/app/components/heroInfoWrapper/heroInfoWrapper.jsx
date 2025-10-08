import "./heroInfoWrapper.css";
import abyss from "./img/Abyss.png";
import vision from "./img/vision.png"

function HeroInfoWrapper() {
  return (
    <div className="personalInfo">
      <div className="hero-info">
        <div className="imgWrapper">
          <img src={abyss} alt="" />
        </div>
        <div className="infoItSelf">
          <h1 className="nameOfHero">Abyss</h1>
          <div className="navBtnsNew">
            <button className="homePage">HOMEPAGE</button>
            <button className="wiki">WIKI</button>
          </div>
        </div>
      </div>
      <div className="descr">
        <h1>
          In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
          of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
          the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and
          the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari
          and/or Narfi and with the stallion Svaðilfari as the father, Loki gave
          birth—in the form of a mare—to the eight-legged horse Sleipnir. In
          addition, Loki is referred to as the father of Váli in the Prose Edda.
        </h1>
      </div>
      <div className="commicsWrapper">
        <h1 className="commicsText">Commics:</h1>
        <div className="commicsNames">
          <div className="miniCards">
            <h1 className="commicTitle">
              All-Winners Squad: Band of Heroes (2011) #3
            </h1>
          </div>
          <div className="miniCards">
            <h1 className="commicTitle">
              All-Winners Squad: Band of Heroes (2011) #3
            </h1>
          </div>
          <div className="miniCards">
            <h1 className="commicTitle">
              All-Winners Squad: Band of Heroes (2011) #3
            </h1>
          </div>
          <div className="miniCards">
            <h1 className="commicTitle">
              All-Winners Squad: Band of Heroes (2011) #3
            </h1>
          </div>
          <div className="miniCards">
            <h1 className="commicTitle">
              All-Winners Squad: Band of Heroes (2011) #3
            </h1>
          </div>
          <div className="miniCards">
            <h1 className="commicTitle">
              All-Winners Squad: Band of Heroes (2011) #3
            </h1>
          </div>
          <div className="miniCards">
            <h1 className="commicTitle">
              All-Winners Squad: Band of Heroes (2011) #3
            </h1>
          </div>
          <div className="miniCards">
            <h1 className="commicTitle">
              All-Winners Squad: Band of Heroes (2011) #3
            </h1>
          </div>
          <div className="miniCards">
            <h1 className="commicTitle">
              All-Winners Squad: Band of Heroes (2011) #3
            </h1>
          </div>
          <div className="miniCards">
            <h1 className="commicTitle">
              All-Winners Squad: Band of Heroes (2011) #3
            </h1>
          </div>
        </div>
      </div>
      <img src={vision} alt="" className="vision"/>
    </div>
  );
}

export default HeroInfoWrapper;
