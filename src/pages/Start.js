import { useState } from "react";
import { BirthdayImage } from "./cake";
import { MessageList } from "./fadingmessage";
import music from "./music.mp3";
import Sound from "react-sound";
import { Link } from "react-router-dom";

export const Start = () => {
  const [showLoader, setShowLoader] = useState(true);
  const dataToPass = { showForm: false };
  function handlePlayClick() {
    setShowLoader(false);
  }
  const handleError = (e) => {
    console.error("Sound playback error:", e);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          {showLoader && (
            <div className="loader">
              <button id="play" onClick={handlePlayClick}>
                Start
              </button>
            </div>
          )}
        </div>
        <canvas id="confetti"></canvas>
      </div>
      {!showLoader && (
        <div className="main">
          <Sound
            url={music}
            playStatus={Sound.status.PLAYING}
            loop={true}
            onError={handleError}
          ></Sound>
          <div className="container pt-5">
            <div className="row">
              <div className="col-12 col-xl-6 mx-auto">
                <img src={require("../img/banner.png")} alt="" />
              </div>
              <div className="col-12  text-center">
                <div id="name" class="area">
                  Parth
                </div>
              </div>
              <div className="col-12 text-center">
                <div className="type-wrap">
                  <MessageList />
                </div>
              </div>
              <BirthdayImage />
            </div>
          </div>
          <div>
            <Link to="/" state={dataToPass}>
              Check your messages here
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
