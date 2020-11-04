//
//  setupTests.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ 
    adapter: new Adapter()
});
