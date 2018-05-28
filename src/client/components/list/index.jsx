import React from 'react'

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return (
      <div className="clock">
        <h1>A clock:</h1>
        <h2>It is {this.state.date.toLocaleTimeString()} ...</h2>
      </div>
    )
  }

}
