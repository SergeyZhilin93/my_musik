import React from 'react'
import './style.css'

export class TImer extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 1000
    )
  }
  componentWillMount() {
    clearInterval(this.timerId)
  }
  tick() {
    this.setState({date: new Date()});
  }
  render() {
    return(
      <div>
        <h2 className='timer-watch'>{this.state.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h2>
      </div>
    )
  }
}