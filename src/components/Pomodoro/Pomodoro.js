//
//  Pomodoro.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import moment from 'moment';
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

const Pomodoro = ({ user, userProfile, season }) => {
    let seasonStyling = season ? "seasonStyling" : "";
    let seasonStylingAlt = season ? "seasonStylingAlt" : "";

    const [playButton, setPlayButton] = useState(false);
    const [restartButton, setRestartButton] = useState(false);
    const [pizzaButton, setPizzaButton] = useState(false);
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const now = moment();
        getGreetingSuffix(now);        
    }, [])

    const getGreetingSuffix = (now) => {
        const currentHour = now.format("HH");
        const afternoonTime = 12;
        const eveningTime = 18;

        if (currentHour > eveningTime) {
            setGreeting('Good evening');
        } else if (currentHour > afternoonTime) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good morning')
        }
    }

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

    const seasonIconOuter = ["fas", "spider"]; 
    const seasonIconInner = ["fas", "ghost"];
    const seasonIconTimer = ["fas", "skull-crossbones"];

    const seasonColor = "#F37D0F";
    const seasonColorAlt = "#FFE01B";

    return (
        <div className="pomodoroHeader">
            <h1 className="greetingText">
                {greeting}, 
                <a className="userProfile" href={userProfile} target="_blank">
                    {` ${user}`}
                </a>                
            </h1>

            {/*<h1 className="pomodoroHeaderTitleText">{moment().format("HH:mm:ss")}</h1>*/}

            <div className="pomodoroHeaderTitle">
                <div className={`iconsSpacing ${seasonStyling}Icons`}>
                    <FontAwesomeIcon icon={season ? seasonIconOuter : ["fas", "pizza-slice"]} />
                </div>
                <div className={`iconsSpacing ${seasonStylingAlt}Icons`}>
                    <FontAwesomeIcon icon={season ? seasonIconInner : ["fas", "utensils"]} />
                </div>
                <h1 className="pomodoroHeaderTitleText">{season ? "pomodorooooo" : "pomodoro"}</h1>
                <div className={`iconsSpacing ${seasonStylingAlt}Icons`}>
                    <FontAwesomeIcon icon={season ? seasonIconInner : ["fas", "utensils"]} />
                </div>
                <div className={`iconsSpacing ${seasonStyling}Icons`}>
                    <FontAwesomeIcon icon={season ? seasonIconOuter : ["fas", "pizza-slice"]} />
                </div>
            </div>

            <div className="pomodoroHeaderTitle">
                <div className={`iconsSpacing ${seasonStyling}Icons`}>
                    <FontAwesomeIcon icon={season ? seasonIconTimer : ["fas", "clock"]} />
                </div>
                <div className={`countdown ${seasonStyling}AltIcons`}>
                    {minutesRemaining}:{secondsRemaining}
                </div>
                <div className={`iconsSpacing ${seasonStyling}Icons`}>
                    <FontAwesomeIcon icon={season ? seasonIconTimer : ["fas", "clock"]} />
                </div>

            </div>
            <p>{pomodoroText}</p>

            <div className="pomodoroPanel">
                <button className="controlButtons" onClick={countdown} disabled={pizzaButton}>
                    {season 
                    ? 
                    <FontAwesomeIcon icon={seasonIconOuter} style={{ color: season ? seasonColor : "#FFF" }} /> 
                    : 
                    <FontAwesomeIcon icon={["fas", "pizza-slice"]} style={{ color: season ? seasonColor : "#FFF" }} />
                    }
                </button>
                <button className="controlButtons" onClick={clearCountdown} disabled={restartButton}>
                    <FontAwesomeIcon icon={["fas", "undo"]}  style={{ color: season ? seasonColorAlt : "#FFF" }}/>
                </button>
                <button className="controlButtons" onClick={countdown} disabled={playButton}>
                    { 
                    !timerRunning 
                    ? 
                    <FontAwesomeIcon icon={["fas", "play"]} style={{ color: season ? seasonColor : "#FFF" }} /> 
                    : 
                    <FontAwesomeIcon icon={["fas", "pause"]} style={{ color: season ? seasonColor : "#FFF" }} /> 
                    }
                </button>
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
