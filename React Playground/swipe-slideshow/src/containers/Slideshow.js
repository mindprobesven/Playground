import React, { Component } from 'react'
import Slides from './Slides';

class Slideshow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMouseDown: false,
      scrollX: 0
    }

    this.animationFrame
    this.startMousePosition = 0
    this.lastMousePosition = 0
  }
  
  componentDidMount() {
    console.log('Swipe Slide v0.5 by Sven Kohn')
    console.log('All systems are go!')
  }

  componentWillUnmount() {
    console.log('Swipe Slide v0.5 by Sven Kohn')
    console.log('Shutting down!')

    cancelAnimationFrame(this.animationFrame)
  }

  mouseMove = (e) => {
    this.lastMousePosition = e.clientX
  }

  mouseDown = (e) => {
    this.setState({
      isMouseDown: true
    })
    this.startMousePosition = e.clientX
    this.animationFrame = requestAnimationFrame(this.update)
  }

  mouseUp = () => {
    this.setState({
      isMouseDown: false
    })

    cancelAnimationFrame(this.animationFrame)
  }

  mouseLeave = () => {
    if(this.state.isMouseDown) {
      this.setState({
        isMouseDown: false
      })

      cancelAnimationFrame(this.animationFrame)
    }
  }

  update = () => {  
    if(this.state.isMouseDown) {
      let scrollX = this.lastMousePosition - this.startMousePosition
      const nextState = {...this.state, scrollX}
      this.setState(nextState)
    }
    this.animationFrame = requestAnimationFrame(this.update)
  }

  render() {
    const { scrollX, isMouseDown } = this.state

    return (
      <div className="slideshow" 
        onMouseDown={this.mouseDown} 
        onMouseUp={this.mouseUp} 
        onMouseLeave={this.mouseLeave} 
        onMouseMove={this.mouseMove}
      >
        <Slides scroll={scrollX} isMouseDown={isMouseDown}/>
      </div>
    )
  }
}

export default Slideshow