import React from "react";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 place-content-around h-128">
        <div className="text-8xl text-primary">Studyfi</div>

        <div className="flex flex-col justify-center items-center">
          <button className="btn btn-outline btn-primary">
            Login with Spotify
          </button>
        </div>
      </div>
      <div className="">
        <div>Built by</div>
        <a href="https://github.com/espitiaandres">espitiaandres</a>
      </div>

      {/* <div className="fixed bottom-20 left-20 text-primary">
        <div>Built by</div>
        <a href="https://github.com/espitiaandres">espitiaandres</a>
      </div> */}
    </div>
  );
};

export default LandingPage;
