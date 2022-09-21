import React from "react";
import { authEndpoint, redirectUri, scopes } from "./LandingPageHelpers";

const LandingPage = () => {
  const clientId = process.env.CLIENT_ID || "";

  // TODO: continue fleshing out the redirecting

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 place-content-around h-full">
        <div className="text-8xl text-primary">Studyfi</div>

        <div className="flex flex-col justify-center items-center">
          <button className="btn btn-outline btn-primary">
            Login with Spotify
          </button>
        </div>
      </div>
      <span className="grid grid-rows-3 justify-center content-center">
        <div className="text-center">
          Made with ❤️ by&nbsp;
          <a
            className="text-center underline underline-offset-2"
            href="https://github.com/espitiaandres"
          >
            espitiaandres
          </a>
        </div>
        <div className="text-center">
          using React, Vite, Tailwind, and DaisyUI
        </div>
      </span>
    </div>
  );
};

export default LandingPage;
