//
//  tableFormat.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';

// Top tracks categories definitions
const trackPopularityDesc = `The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.
The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.
Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. Note that the popularity value may lag actual popularity by a few days: the value is not updated in real time.`;
const acousticnessDesc = "A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.";
const danceabilityDesc = "Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.";
const energyDesc = "Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.";
const keySignatureDesc = "The key the track is in. Integers map to pitches using standard Pitch Class notation . E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.";
const instrumentalnessDesc = "Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.";
const valenceDesc = "A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).";

// Top artists categories definitions
const followersDesc = "The total number of followers.";
const genreDesc = `A list of the genres the artist is associated with. For example: "Prog Rock" , "Post-Grunge". (If not yet classified, the array is empty.)`;
const nameDesc = "The name of the artist";
const photoDesc = "Image of the artist";
const artistPopularityDesc = "The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist’s popularity is calculated from the popularity of all the artist’s tracks.";

const formatter = (cell, row) => {
    const imgStyle = {
        height: '64px',
        width: '64px'
    };

    return cell.toString().includes("http") ? 
    <span>
        <img style={imgStyle} src={cell} alt="cell"/>
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
        }
    },
    {
        text: 'Album',
        dataField: 'album',
        formatter,
        headerData: 'Album name',
        attrs: {
            title: 'Album name'
        }
    },
    {
        text: 'Album Cover',
        dataField: 'albumCover',
        formatter,
        headerData: 'Album cover',
        attrs: {
            title: 'Album cover'
        }
    },
    {
        text: 'Release Date',
        dataField: 'releaseDate',
        formatter,
        headerData: 'Song release date',
        attrs: {
            title: 'Song release date'
        }
    },
    {
        text: 'Artists',
        dataField: 'artists',
        formatter,
        headerData: 'Artists on the song',
        attrs: {
            title: 'Artists on the song'
        }
    },    
    {
        text: 'Acousticness',
        dataField: 'acousticness',
        formatter,
        headerData: acousticnessDesc,
        attrs: {
            title: acousticnessDesc
        }
    },
    {
        text: 'Popularity',
        dataField: 'popularity',
        formatter,
        headerData: trackPopularityDesc,
        attrs: {
            title: trackPopularityDesc
        }
    },
    {
        text: 'Danceability',
        dataField: 'danceability',
        formatter,
        headerData: danceabilityDesc,
        attrs: {
            title: danceabilityDesc
        }
    },
    {
        text: 'Energy',
        dataField: 'energy',
        formatter,
        headerData: energyDesc,
        attrs: {
            title: energyDesc
        }
    },
    {
        text: 'Key Signature',
        dataField: 'keySignature',
        formatter,
        headerData: keySignatureDesc,
        attrs: {
            title: keySignatureDesc
        }
    },
    {
        text: 'Instrumentalness',
        dataField: 'instrumentalness',
        formatter,
        headerData: instrumentalnessDesc,
        attrs: {
            title: instrumentalnessDesc
        }
    },
    {
        text: 'Valence',
        dataField: 'valence',
        formatter,
        headerData: valenceDesc,
        attrs: {
            title: valenceDesc
        }
    }
];

const topArtistColumns = [
    {
        text: 'Name',
        dataField: 'name',
        formatter,
        headerData: nameDesc,
        attrs: {
            title: nameDesc
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Followers',
        dataField: 'followers',
        formatter,
        headerData: followersDesc,
        attrs: {
            title: followersDesc
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Genres',
        dataField: 'genre',
        formatter,
        headerData: genreDesc,
        attrs: {
            title: genreDesc
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Photo',
        dataField: 'photo',
        formatter,
        headerData: photoDesc,
        attrs: {
            title: photoDesc
        },
        style: {
            width: '10%'
        }
    },
    {
        text: 'Popularity',
        dataField: 'popularity',
        formatter,
        headerData: artistPopularityDesc,
        attrs: {
            title: artistPopularityDesc
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
];

export { 
    topSongColumns,
    topArtistColumns,
    trackPopularityDesc,
    acousticnessDesc,
    danceabilityDesc,
    energyDesc,
    keySignatureDesc,
    instrumentalnessDesc,
    valenceDesc,
    keySignaturesLetters,
    followersDesc,
    genreDesc,
    nameDesc,
    photoDesc,
    artistPopularityDesc
};