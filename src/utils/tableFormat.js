//
//  tableFormat.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import {
    followersDesc,
    genreDesc,
    nameDesc,
    photoDesc,
    artistPopularityDesc
} from './TopArtistsDefintions';
import {
    trackPopularityDesc,
    acousticnessDesc,
    danceabilityDesc,
    energyDesc,
    keySignatureDesc,
    instrumentalnessDesc,
    valenceDesc
} from './TopTracksDefinitions';

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
    keySignaturesLetters
};