import Button from '../Button.component';

// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';

describe('Button', () => {
  let component;

  beforeEach(() => {
    component = <Button/>;
  });

  it('renders correctly', () => {
    const tree = renderer.create(component);
    expect(tree).toMatchSnapshot();
  });
});
