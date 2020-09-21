//
//  Message.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './Userslist.css';

const Userslist = ({ users }) => {
  return (
    <div className="userslist">
      {
        users.length > 1 ? 
        (
          <div>
            <p>Online:</p>
            <div className="activeContainer">
              <p>
                {
                  users.map(({ name }) => (
                    <div key={name} className="activeItem">
                      {name}
                      <img alt="Online Icon" src={onlineIcon}/>
                    </div>
                    )
                  )
                }
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p>Looks like you're alone in this chat room...</p>
          </div>
        )
      }
    </div>
    )
  };

export default Userslist;