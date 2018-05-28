import React from 'react'
import Home from '@containers/home'
import List from '@containers/list'

export default class Root extends React.Component {
  render() {
    return (
      <div className="app-root">
        <h1>This is component/root ... ?</h1>
        <Home />
        <List />
      </div>
    )
  }
}
