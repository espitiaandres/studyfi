import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className="text-4xl text-primary">Studyfi</div>

      <button className="btn btn-outline btn-primary">
        Login with Spotify
      </button>

      <div className="flex flex-row justify-evenly">
        <div>Built by</div>
        <a href="github.com/espitiaandres"> espitiaandres</a>
      </div>
    </div>
  );
};

export default LandingPage;
