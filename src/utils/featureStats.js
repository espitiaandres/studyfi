//
//  featureStats.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

const averageFeaturesOutput = (features) => {
    const acousticnessArray = features.map(s => s.acousticness);
    const acousticnessAvgReturn = averageFeatures(acousticnessArray);
    
    const danceabilityArray = features.map(s => s.danceability);
    const danceabilityAvgReturn = averageFeatures(danceabilityArray);

    // const durationmsArray = features.map(s => s.duration_ms);
    // const durationmsAvgReturn = averageFeatures(durationmsArray);

    const energyArray = features.map(s => s.energy);
    const energyAvgReturn = averageFeatures(energyArray);

    const instrumentalnessArray = features.map(s => s.instrumentalness);
    const instrumentalnessAvgReturn = averageFeatures(instrumentalnessArray);

    const livenessArray = features.map(s => s.liveness);
    const livenessAvgReturn = averageFeatures(livenessArray);

    const speechinessArray = features.map(s => s.speechiness);
    const speechinessAvgReturn = averageFeatures(speechinessArray);

    const valenceArray = features.map(s => s.valence);
    const valenceAvgReturn = averageFeatures(valenceArray);

    return {
        acousticnessAvgReturn,
        danceabilityAvgReturn,
        // durationmsAvgReturn,
        energyAvgReturn,
        instrumentalnessAvgReturn,
        livenessAvgReturn,
        speechinessAvgReturn,
        valenceAvgReturn
    };
}

const averageFeatures = (featureArray) => {
    let sum = featureArray.reduce((sum, value) => {
        return (sum+value);
    }, 0);

    const featureAvgRaw = (sum / featureArray.length) * 100;
    const featureAvg = featureAvgRaw.toFixed(2);
    return featureAvg;
}

export { averageFeaturesOutput };
