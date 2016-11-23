import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Profile from '../src/client/js/components/profile';

describe("Profile Component", function() {
  it("contains the profile class", function() {
    expect(shallow(<Profile />).is('.profile')).to.equal(true);
  });
});
