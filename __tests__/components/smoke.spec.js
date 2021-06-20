import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect, it, describe } from '@jest/globals';

describe("Text", () => {
    it('renders text', () => {
        const wrapper = shallow(<Text>Hello, world!</Text>);

        expect(wrapper.text()).toEqual("Hello, world!");
    });

});
   