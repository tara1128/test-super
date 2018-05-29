import React from 'react'
import { ImportStyle } from 'sp-css-import'
import ErrorHandle from '@containers/ErrorHandle'
import Header from '@components/header'
import Footer from '@components/footer'

@ImportStyle(require('./index.less'))
export default class Root extends React.Component {

  render() {
    return (
      <ErrorHandle className={this.props.className}>
        <Header />
        {this.props.children}
        <Footer />
      </ErrorHandle>
    )
  }
}


