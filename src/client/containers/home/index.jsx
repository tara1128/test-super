import React from 'react'
import Clock from '@components/list'


export default class extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <h2>This is home</h2>
        <Clock />
      </div>
    )
  }
}
