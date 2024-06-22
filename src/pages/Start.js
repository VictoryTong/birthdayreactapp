import { useState } from "react";
import { TypedComponent } from "./typedcomponent";
import { BirthdayImage } from "./cake";

export const Start = () => {
  const [showLoader, setShowLoader] = useState(true);
  function handlePlayClick() {
    setShowLoader(false);
  }
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
                  <div id="typed-strings" class="typing">
                    <TypedComponent />
                  </div>
                </div>
              </div>
              <BirthdayImage />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
