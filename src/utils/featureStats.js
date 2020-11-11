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

    const energyArray = features.map(s => s.energy);
    const energyAvgReturn = averageFeatures(energyArray);

    const instrumentalnessArray = features.map(s => s.instrumentalness);
    const instrumentalnessAvgReturn = averageFeatures(instrumentalnessArray);

    const livenessArray = features.map(s => s.liveness);
    const livenessAvgReturn = averageFeatures(livenessArray);

    const valenceArray = features.map(s => s.valence);
    const valenceAvgReturn = averageFeatures(valenceArray);

    return {
        acousticnessAvgReturn,
        danceabilityAvgReturn,
        energyAvgReturn,
        instrumentalnessAvgReturn,
        livenessAvgReturn,
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
