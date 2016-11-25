import React from 'react'
import TestUtils from 'react-addons-test-utils'
import {ButtonCross} from 'components/ButtonCross/ButtonCross'
import {shallow} from 'enzyme'

describe('(Component) ButtonCross', () => {
  let _wrapper
  let toggled = false;

  const toggle = () => {
    console.log('toggle call', toggled)
    toggled = !toggled;
  }

  beforeEach(() => {
    toggled = false;
    _wrapper = shallow(<ButtonCross toggle={toggle} toggled={toggled}/>)
  })

  it('should not have class at toggled', () => {
    const plus = _wrapper.find('.ButtonCross > div')
    expect(plus.hasClass('toggled'))
      .to
      .equal(false);
  });

  it('should have class toggled', () => {
    toggled = true;
    _wrapper = shallow(<ButtonCross toggle={toggle} toggled={toggled}/>)
    const plus = _wrapper.find('.ButtonCross > div')
    expect(plus.hasClass('toggled'))
      .to
      .equal(true);
  })

    it('should set toggled at true', () => {
    _wrapper = shallow(<ButtonCross toggle={toggle} toggled={toggled}/>)
    const plus = _wrapper.simulate('click')
    expect(toggled)
      .to
      .equal(true);
  })
})
