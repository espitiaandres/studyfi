//
//  springFunctions.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

const calculateCenter = (x, y) => [
    -(y - window.innerHeight / 2) / 25,
    (x - window.innerWidth / 2) / 25,
    1.01,
  ]

const trans = (x, y, s) => `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export { calculateCenter, trans };
