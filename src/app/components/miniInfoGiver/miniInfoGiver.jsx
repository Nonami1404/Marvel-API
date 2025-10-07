import "./miniInfoGiver.css";
import heroImg from "./img/heroImg.png";
import heroItems from "./img/heroItems.png";

function MiniInfoGiver() {
  return (
    <div className="infoGiverWrapper container">
      <div className="heroInfoWrapper">
        <div className="heroImg">
          <img src={heroImg} alt="" />
        </div>
        <div className="heroInfo">
          <h1 className="name">THOR</h1>
          <div className="descr">
            <span>
              As the Norse God of thunder and lightning, Thor wields one of the
              greatest weapons ever made, the enchanted hammer Mjolnir. While
              others have described Thor as an over-muscled, oafish imbecile,
              he's quite smart and compassionate...
            </span>
          </div>
          <div className="navBtns">
            <button className="homePage btnSample">HOMEPAGE</button>
            <button className="wiki btnSample">WIKI</button>
          </div>
        </div>
      </div>
      <div className="askBar">
        <div className="title">
          <h1>
            Random character for today! Do you want to get to know him better?
          </h1>
        </div>
        <div className="selectAnother">
          <div className="usePart">
            <h1 className="textAnother">Or choose another one</h1>
            <button className="homePage btnSample">TRY IT</button>
          </div>
          <div className="heroItemsImg">
            <img src={heroItems} alt="" className="heroItem" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniInfoGiver;
