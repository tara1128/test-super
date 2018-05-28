import React from 'react'
// import { connect } from 'react-redux'

// const mapStateToProps = (state) => (
  // "okok"
// )

// @connect(mapStateToProps)

export default class extends React.Component {
  static onServerRenderHtmlExtend({ext, store}) {

  }

  render() {
    return (
      <div className="list-wrapper">
        <p>I am a list page/containers.</p>
      </div>
    )
  }
}
