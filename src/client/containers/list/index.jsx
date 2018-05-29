import React from 'react'
// import { connect } from 'react-redux'

// const mapStateToProps = (state) => (
  // "okok"
// )

// @connect(mapStateToProps)

export default class extends React.Component {

  render() {
    return (
      <div className={this.props.className}>
        <p>I am a list page, containers.</p>
      </div>
    )
  }
}
