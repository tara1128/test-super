import React from 'react'
import { ImportStyle } from 'sp-css-import'

@ImportStyle(require('./index.less'))
export default class extends React.Component {

  render() {
    return (
      <div {...this.props}>
        <div className="container">
          <a className="logo" href="/">Logoooo</a>
          <ul className="navs">
            <li><a href="/">Home</a></li>
            <li><a href="/list">List</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }


}
