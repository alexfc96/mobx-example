import React, { Component } from 'react'
import { observer } from 'mobx-react';

class Navbar extends Component {
  render() {
    return (
      <div>
        Navbar
        {this.props.data.value}
      </div>
    )
  }
}

export default observer(Navbar);
