import React from 'react'
import { ImportStyle } from 'sp-css-import'

@ImportStyle(require('./index.less'))
export default class extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <p>Copyright @2018. All rights reserved.</p>
      </div>
    )
  }
}
