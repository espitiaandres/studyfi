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

    const averages = [{
            name: 'acousticness',
            stat: acousticnessAvgReturn
        }, {
            name: 'danceability',
            stat: danceabilityAvgReturn
        }, {
            name: 'energy',
            stat: energyAvgReturn
        }, {
            name: 'instrumentalness',
            stat: instrumentalnessAvgReturn
        }, {
            name: 'liveness',
            stat: livenessAvgReturn
        }, {
            name: 'valence',
            stat: valenceAvgReturn
        }
    ];

    const topAverages = averages.sort((a, b) => b.stat - a.stat).slice(0, 3);
    const playlistSummary = playlistFeaturesSummary(topAverages);

    return {
        acousticnessAvgReturn,
        danceabilityAvgReturn,
        energyAvgReturn,
        instrumentalnessAvgReturn,
        livenessAvgReturn,
        valenceAvgReturn,
        playlistSummary
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

const playlistFeaturesSummary = (topAverages) => {
    let summary = "a playlist to ";

    for (let i = 0; i < topAverages.length; i++) {
        if (topAverages[i].name === "acousticness") {
            // if (i === topAverages.length - 1) {
            //     summary += " and be in touch with nature.";
            // } else {
            //     summary += "be in touch with nature, ";
            // }
            summary += (i === topAverages.length - 1 ) ? " and be in touch with nature." : "be in touch with nature, ";
            
        } else if (topAverages[i].name === "danceability") {
            // summary += "get the party started, ";
            summary += (i === topAverages.length - 1 ) ? " and get the party started." : "get the party started, ";
        } else if (topAverages[i].name === "energy") {
            // summary += "release your energy, ";
            summary += (i === topAverages.length - 1 ) ? " and release your energy." : "release your energy, ";
        } else if (topAverages[i].name === "instrumentalness") {
            // summary += "focus, ";
            summary += (i === topAverages.length - 1 ) ? " and focus." : "focus, ";
        } else if (topAverages[i].name === "liveness") {
            // summary += "replicate a live concert, ";
            summary += (i === topAverages.length - 1 ) ? " and replicate a live concert." : "replicate a live concert, ";
        } else if (topAverages[i].name === "valence") {
            // summary += "feel good about life, ";
            summary += (i === topAverages.length - 1 ) ? " and feel good about life." : "feel good about life, ";
        }
    }

    return summary;
}

export { averageFeaturesOutput };
