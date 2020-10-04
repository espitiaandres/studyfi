//
//  Pomodoro.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import 'animate.css';
import './Pomodoro.css';

const secondsInAMinute = 60;
const setTimeMinutes = 25;                                              // minutes
const setTimeSeconds = setTimeMinutes * secondsInAMinute - 1;           // seconds
const cooldownSetTimeMinutes = 5;
const cooldownSetTimeSeconds = cooldownSetTimeMinutes * secondsInAMinute;
let remainingTime = setTimeSeconds;
let minutesRemaining = setTimeMinutes < 10 ? "0" + setTimeMinutes.toString() : setTimeMinutes.toString();
let secondsRemaining = "00";
let timerRunning = false;
let pomodoroText = "press on the play button below to begin";
let interval;
let cooldownInterval;

library.add(fas);

const Pomodoro = ({ season }) => {
    let seasonStyling = season ? "seasonStyling" : "";
    let seasonStylingAlt = season ? "seasonStylingAlt" : "";

    const [playButton, setPlayButton] = useState(false);
    const [restartButton, setRestartButton] = useState(false);
    const [pizzaButton, setPizzaButton] = useState(false);

    // countdown changes the text to Work and is responsible for the working countdown
    const countdown = () => {
        setRestartButton(false);
        if (playButton) {
            return;
        }
        remainingTime = setTimeSeconds;
        pomodoroText = season ? "spookspookspookspookspook" : "WorkWorkWorkWorkWork";
        remainingTime++;
        updatedFormattedTimeString(remainingTime);
        timerRunning = true;
        interval = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                updatedFormattedTimeString(remainingTime);
                timerRunning = true;
            } else {
                clearInterval(interval);
                countdownCooldown();
            }
        }, 1000);
        setPlayButton(true);
        setPizzaButton(true);
    }

    // countdownCooldown changes the text to Work and is responsible for the resting countdown
    const countdownCooldown = () => {
        remainingTime = cooldownSetTimeSeconds;
        pomodoroText = season ? "2sp00ky4me" : "RestRestRestRestRest";
        remainingTime++;
        cooldownInterval = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                updatedFormattedTimeString(remainingTime);
            } else {
                clearInterval(cooldownInterval);
                countdown();
            }
        }, 1000)
    }

    // clearsCountDown clears the countdown once the working time has elapsed.
    const clearCountdown = () => {
        setPlayButton(false);
        setPizzaButton(false);
        if (restartButton) {
            return;
        }
        pomodoroText = season ? "2sp00ky4me" : "RestRestRestRestRest";
        clearInterval(interval);
        remainingTime = setTimeSeconds + 1;
        timerRunning = false;
        updatedFormattedTimeString(remainingTime);
        setRestartButton(true);
    }

    // updates the formatted time string to output to the user.
    const updatedFormattedTimeString = (remainingTime) => {
        minutesRemaining = Math.floor(remainingTime / secondsInAMinute);
        let baseMinutes = minutesRemaining * secondsInAMinute;
        if (minutesRemaining < 10) {
            minutesRemaining = minutesRemaining === 0 ? "00" : "0" + minutesRemaining.toString();
        }
        secondsRemaining = remainingTime - baseMinutes;
        if (secondsRemaining < 10) {
            secondsRemaining = secondsRemaining === 0 ? "00" : "0" + secondsRemaining.toString();
        }
    }

    return (
        <div className="pomodoroHeader">
            <div>
                <div className="pomodoroHeaderTitle">
                    <div className={`iconsSpacing ${seasonStyling}Icons`}>
                        <FontAwesomeIcon icon={season ? ["fas", "spider"] : ["fas", "pizza-slice"]} />
                    </div>
                    <div className={`iconsSpacing ${seasonStylingAlt}Icons`}>
                        <FontAwesomeIcon icon={season ? ["fas", "ghost"] : ["fas", "utensils"]} />
                    </div>
                    <h1 className="pomodoroHeaderTitleText">{season ? "pomodorooooo" : "pomodoro"}</h1>
                    <div className={`iconsSpacing ${seasonStylingAlt}Icons`}>
                        <FontAwesomeIcon icon={season ? ["fas", "ghost"] : ["fas", "utensils"]} />
                    </div>
                    <div className={`iconsSpacing ${seasonStyling}Icons`}>
                        <FontAwesomeIcon icon={season ? ["fas", "spider"] : ["fas", "pizza-slice"]} />
                    </div>
                </div>
            </div>
            <p>{pomodoroText}</p>

            <div className="pomodoroPanel">
                <button className={`controlButtons-pizzaslice ${seasonStyling}`} onClick={countdown} disabled={pizzaButton}>
                    {season ? <FontAwesomeIcon className="controlButtonsColouring" icon={["fas", "spider"]} /> : <FontAwesomeIcon icon={["fas", "pizza-slice"]} />}
                </button>
                <button className={`controlButtons ${seasonStylingAlt}`} onClick={clearCountdown} disabled={restartButton}>
                    <FontAwesomeIcon icon={["fas", "undo"]} />
                </button>
                <button className={`controlButtons ${seasonStylingAlt}`} onClick={countdown} disabled={playButton}>
                    { !timerRunning ? <FontAwesomeIcon icon={["fas", "play"]} /> : <FontAwesomeIcon icon={["fas", "pause"]} /> }
                </button>
                <p className={`countdown ${seasonStyling}`}>
                    <div className="controlButtonsColouring">
                        {minutesRemaining}:{secondsRemaining}
                    </div>    
                </p>
            </div>
            <div className="icon-scroll animate__animated animate__bounce animate__infinite animate__slow">
                <Link to="topsongs" spy={true} smooth={true} duration={400}>
                    <FontAwesomeIcon icon={"chevron-down"} size="2x" />
                </Link>
            </div>
        </div>
    )
}

export default Pomodoro
