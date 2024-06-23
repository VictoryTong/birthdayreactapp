import { useState } from "react";
import { BirthdayImage } from "./cake";
import { MessageList } from "./fadingmessage";
import music from "./music.mp3";
import Sound from "react-sound";
import { Link } from "react-router-dom";

export const Start = () => {
  const [showLoader, setShowLoader] = useState(true);
  function handlePlayClick() {
    setShowLoader(false);
  }
  const handleError = (e) => {
    console.error("Sound playback error:", e);
  };
  return (
    <div>
      <div class="container">
        <div class="row">
          {showLoader && (
            <div class="loader">
              <button id="play" onClick={handlePlayClick}>
                Start
              </button>
            </div>
          )}
        </div>
        <canvas id="confetti"></canvas>
      </div>
      {!showLoader && (
        <div class="main">
          <Sound
            url={music}
            playStatus={Sound.status.PLAYING}
            loop={true}
            onError={handleError}
          ></Sound>
          <div class="container pt-5">
            <div class="row">
              <div class="col-12 col-xl-6 mx-auto">
                <img src={require("../img/banner.png")} alt="" />
              </div>
              <div class="col-12  text-center">
                <div id="name" class="area">
                  Parth
                </div>
              </div>
              <div class="col-12 text-center">
                <div class="type-wrap">
                  <MessageList />
                </div>
              </div>
              <BirthdayImage />
            </div>
          </div>
          <div>
            <Link to="/">Check your messages here</Link>
          </div>
        </div>
      )}
    </div>
  );
};
