import 'react-native';

import React from 'react';
// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer';

import App from '../src/App';

it('renders correctly', () => {
  const tree = create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
