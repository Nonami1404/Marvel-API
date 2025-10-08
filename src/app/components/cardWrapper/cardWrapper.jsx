import "./cardWrapper.css";
import abyss from "./img/abyss.png";

function CardWrapper() {
  return (
    <div className="overallCardWrapper container">
      <div className="cards">
        <div className="mini-card-wrapper">
          <div className="card">
            <div className="heroImg">
              <img src={abyss} alt="" />
            </div>
            <h1 className="heroName">Abyss</h1>
          </div>
          <div className="card">
            <div className="heroImg">
              <img src="" alt="" />
            </div>
            <h1 className="heroName"></h1>
          </div>
          <div className="card">
            <div className="heroImg">
              <img src="" alt="" />
            </div>
            <h1 className="heroName"></h1>
          </div>
          <div className="card">
            <div className="heroImg">
              <img src="" alt="" />
            </div>
            <h1 className="heroName"></h1>
          </div>
          <div className="card">
            <div className="heroImg">
              <img src="" alt="" />
            </div>
            <h1 className="heroName"></h1>
          </div>
          <div className="card">
            <div className="heroImg">
              <img src="" alt="" />
            </div>
            <h1 className="heroName"></h1>
          </div>
          <div className="card">
            <div className="heroImg">
              <img src="" alt="" />
            </div>
            <h1 className="heroName"></h1>
          </div>
          <div className="card">
            <div className="heroImg">
              <img src="" alt="" />
            </div>
            <h1 className="heroName"></h1>
          </div>
          <div className="card">
            <div className="heroImg">
              <img src="" alt="" />
            </div>
            <h1 className="heroName"></h1>
          </div>
        </div>
        <button className="learnMoreBtn homePage">Learn more</button>
      </div>
    </div>
  );
}

export default CardWrapper;
