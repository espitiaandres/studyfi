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
let cooldownTimerRunning = false;
let interval;
let cooldownInterval;
let pomodoroText = "RestRestRestRestRest";

library.add(fas);

function Pomodoro() {    
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
        pomodoroText = "WorkWorkWorkWorkWork";
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
        pomodoroText = "RestRestRestRestRest";
        remainingTime++;
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

    // clearsCountDown clears the countdown once the working time has elapsed.
    const clearCountdown = () => {
        setPlayButton(false);
        setPizzaButton(false);
        if (restartButton) {
            return;
        }
        pomodoroText = "RestRestRestRestRest";
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
                <button className="controlButtons-pizzaslice" onClick={countdown} disabled={pizzaButton}>
                    <FontAwesomeIcon icon={["fas", "pizza-slice"]} />
                </button>
                <button className="controlButtons" onClick={clearCountdown} disabled={restartButton}>
                    <FontAwesomeIcon icon={["fas", "undo"]} />
                </button>
                <button className="controlButtons" onClick={countdown} disabled={playButton}>
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
