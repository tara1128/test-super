import React from 'react'
import Clock from '@components/list'
import { ImportStyle } from 'sp-css-import'

@ImportStyle(require('./index.less'))
export default class extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2>This is home ... ... ? </h2>
        <Clock />
      </div>
    )
  }
}
