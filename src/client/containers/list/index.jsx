import React from 'react'
import { connect } from 'react-redux'
import List from '@components/list'

const mapStateToProps = (state) => (
  "okok"
)

@connect(mapStateToProps)

export default class extends React.Component {
  static onServerRenderHtmlExtend({ext, store}) {

  }

  render() {
    return (
      <List {...this.props} />
    )
  }
}
