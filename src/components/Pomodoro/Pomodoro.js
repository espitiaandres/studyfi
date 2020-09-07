//
//  Pomodoro.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import './Pomodoro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const secondsInAMinute = 60;
const setTimeMinutes = 25;                                         // minutes
const setTimeSeconds = setTimeMinutes * secondsInAMinute;           // seconds
const cooldownSetTimeMinutes = 0.2;
const cooldownSetTimeSeconds = cooldownSetTimeMinutes * secondsInAMinute;

let remainingTime = setTimeSeconds;
let minutesRemaining = setTimeMinutes < 10 ? "0" + setTimeMinutes.toString() : setTimeMinutes.toString();
let secondsRemaining = "00";
let timerRunning = false;
let cooldownTimerRunning = false;
let interval;
let cooldownInterval;
let pomodoroText = "RestRestRestRestRest";

// countdown changes the text to Work and is responsible for the working countdown
const countdown = () => {
    remainingTime = setTimeSeconds;
    pomodoroText = "WorkWorkWorkWorkWork";
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
}

// countdownCooldown changes the text to Work and is responsible for the resting countdown
const countdownCooldown = () => {
    remainingTime = cooldownSetTimeSeconds;
    pomodoroText = "RestRestRestRestRest";
    cooldownInterval = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            updatedFormattedTimeString(remainingTime);
            cooldownTimerRunning = true;
        } else {
            clearInterval(cooldownInterval);
            countdown();
        }
    }, 1000)
}

const clearCountdown = () => {
    pomodoroText = "RestRestRestRestRest";
    clearInterval(interval);
    remainingTime = setTimeSeconds;
    timerRunning = false;
    updatedFormattedTimeString(remainingTime);
}

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

function Pomodoro() {
    return (
        <div>
            <div className="pomodoroHeader">
                <div className="pomodoroHeaderTitle">
                    <FontAwesomeIcon icon={["fas", "pizza-slice"]} />
                    <h1 className="pomodoroHeaderTitleText">pomodoro</h1>
                    <FontAwesomeIcon icon={["fas", "pizza-slice"]} />
                </div>
                <p>{pomodoroText}</p>
            </div>

            <div className="pomodoroPanel">
                <button className="controlButtons-pizzaslice">
                    <FontAwesomeIcon icon={["fas", "pizza-slice"]} />
                </button>
                <button className="controlButtons" onClick={clearCountdown}>
                    <FontAwesomeIcon icon={["fas", "undo"]} />
                </button>
                <button className="controlButtons" onClick={countdown}>
                    { !timerRunning ? <FontAwesomeIcon icon={["fas", "play"]} /> : <FontAwesomeIcon icon={["fas", "pause"]} /> }
                </button>
                <p className="countdown">
                    {minutesRemaining}:{secondsRemaining}
                </p>
            </div>
        </div>
    )
}

export default Pomodoro
