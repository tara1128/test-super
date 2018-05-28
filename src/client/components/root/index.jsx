import React from 'react'
import Header from '@components/header'
import Footer from '@components/footer'

export default class Root extends React.Component {

  render() {
    return (
      <div className="app-root">
        <Header />
        <h1>Root!</h1>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}


