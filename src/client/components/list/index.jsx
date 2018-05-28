import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div className="list-box">
        <h3>In the component/list</h3>
        <p className="item">Item one in list component.</p>
      </div>
    )
  }

  componentDidMount() {
    console.log(10028)
  }

}
