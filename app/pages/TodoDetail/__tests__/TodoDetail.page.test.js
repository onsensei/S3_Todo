import TodoDetail from '../TodoDetail.page';

// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';

describe('TodoDetail', () => {
  let component;

  beforeEach(() => {
    component = <TodoDetail/>;
  });

  it('renders correctly', () => {
    const tree = renderer.create(component);
    expect(tree).toMatchSnapshot();
  });
});
