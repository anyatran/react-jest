import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

import App from '../src/App'

// test('<App />', () => {
  // test('should have a h2', () => {
  //   const wrapper = shallow(<App />)
  //   expect(wrapper.find('h2')).to.have.length(1)
  // })

  test('app', () => {
    const wrapper = shallow(<App title="Hello from react es6" />)
    console.log(wrapper.instance())
    expect(wrapper.instance().props.title).equal('Hello from react es6')
  })
// })
