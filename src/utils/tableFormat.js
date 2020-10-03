//
//  tableFormat.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';

const acousticnessDesc = "A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.";
const danceabilityDesc = "Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.";
const energyDesc = "Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.";
const keySignatureDesc = "The key the track is in. Integers map to pitches using standard Pitch Class notation . E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.";
const instrumentalnessDesc = "Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.";
const valenceDesc = "A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).";

const formatter = (cell, row) => {     
    return cell.toString().includes("http") ? 
    <span>
        <img src={cell} alt="cell"/>
    </span> : 
    <span>
        {cell}
    </span>;
}

const topSongColumns = [
    {
        text: 'Name',
        dataField: 'name',
        formatter,
        headerData: 'Song name',
        attrs: {
            title: 'Song name'
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Album',
        dataField: 'album',
        formatter,
        headerData: 'Album name',
        attrs: {
            title: 'Album name'
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Album Cover',
        dataField: 'albumCover',
        formatter,
        headerData: 'Album cover',
        attrs: {
            title: 'Album cover'
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Release Date',
        dataField: 'releaseDate',
        formatter,
        headerData: 'Song release date',
        attrs: {
            title: 'Song release date'
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Artists',
        dataField: 'artists',
        formatter,
        headerData: 'Artists on the song',
        attrs: {
            title: 'Artists on the song'
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Acousticness',
        dataField: 'acousticness',
        formatter,
        headerData: acousticnessDesc,
        attrs: {
            title: acousticnessDesc
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Danceability',
        dataField: 'danceability',
        formatter,
        headerData: danceabilityDesc,
        attrs: {
            title: danceabilityDesc
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Energy',
        dataField: 'energy',
        formatter,
        headerData: energyDesc,
        attrs: {
            title: energyDesc
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Key Signature',
        dataField: 'keySignature',
        formatter,
        headerData: keySignatureDesc,
        attrs: {
            title: keySignatureDesc
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Instrumentalness',
        dataField: 'instrumentalness',
        formatter,
        headerData: instrumentalnessDesc,
        attrs: {
            title: instrumentalnessDesc
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Valence',
        dataField: 'valence',
        formatter,
        headerData: valenceDesc,
        attrs: {
            title: valenceDesc
        },
        style: {
            width: '10%'
        }
    }
];

const keySignaturesLetters = [
    'C',
    'C♯/D♭',
    'D',
    'D♯/E♭',
    'E',
    'F',
    'F♯/G♭',
    'G',
    'G♯/A♭',
    'A',
    'A♯/B♭',
    'B'
]

export { topSongColumns,
    acousticnessDesc,
    danceabilityDesc,
    energyDesc,
    keySignatureDesc,
    instrumentalnessDesc,
    valenceDesc,
    keySignaturesLetters
};