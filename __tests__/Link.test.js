import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../src/Link.js';

it('render successfully', () => {
  const tree = renderer.create(<Link href="www.example.com">Example website</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('render an anchor when no page is set', () => {
  const tree = renderer.create(<Link></Link>).toJSON();
  expect(tree).toMatchSnapshot();
});


it('change class when it is hovered', () => {
  const component = renderer.create(<Link href="www.example.com">Example website</Link>)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
