import React from 'react';
import {shallow} from 'enzyme';

import What from './what';

describe('<What />', () => {
  it('Renders without crashing', () => {
        shallow(<What text="stuff" />);
    });


})
