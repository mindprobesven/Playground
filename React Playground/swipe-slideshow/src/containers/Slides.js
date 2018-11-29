import React, { Component } from 'react'

class Slides extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollTo: 0,
      slidesX: 0,
      maxScroll: 0,
      slideWidth: 0,
      totalSlides: 5,
      currentSlide: 1,
      snapTo: {},
      isImageLoaded: false,
      isResized: false
    }

    this.slidesContainer
    this.bodyElement
    this.animationFrame
  }

  componentDidMount() {
    console.log('Slides component - Ready')

    this.bodyElement = document.getElementsByTagName('body')[0]
    this.bodyElement.onresize = () => {
      this.animationFrame = requestAnimationFrame(this.update)
    }
  }

  update = () => {
    const { totalSlides, snapTo } = this.state
      
    const slideWidth = this.slidesContainer.scrollWidth / totalSlides
    const maxScroll = slideWidth * (totalSlides - 1)

    this.setState({ 
      scrollTo: -Math.abs((slideWidth * snapTo.slide) - slideWidth),
      slidesX: -Math.abs((slideWidth * snapTo.slide) - slideWidth),
      maxScroll,
      slideWidth,
      isResized: true
    })

    cancelAnimationFrame(this.animationFrame)
  }

  componentWillUnmount() {
    console.log('Slides component - Shutting down')

    cancelAnimationFrame(this.animationFrame)
    this.bodyElement.onresize = null
  }
  
  componentDidUpdate(prevProps, prevState) {  
    const { scroll, isMouseDown } = this.props
    const { 
      isImageLoaded, 
      slideWidth, 
      slidesX, 
      maxScroll, 
      currentSlide, 
      totalSlides
    } = this.state

    const snapAt = slideWidth * 0.2

    const getScrollWithBoundaries = () => {
      const nextScrollPos = slidesX + scroll
      
      switch(true) {
        case (nextScrollPos > 0):
          return 0
        case (Math.abs(nextScrollPos) > maxScroll):
          return -Math.abs(maxScroll)
        default:
          return nextScrollPos
      }
    }

    const getSnapAndSlideId = () => {
      switch(true) {
        case (scroll < 0):
          // Scrolling left
          return Math.abs(scroll) < snapAt ? {
            snap: 'right',
            slide: getSlideId('current')
          } : {
            snap: 'left',
            slide: getSlideId('next')
          }
        case (scroll > 0):
          // Scrolling right
          return Math.abs(scroll) < snapAt ? {
            snap: 'left',
            slide: getSlideId('current')
          } : {
            snap: 'right',
            slide: getSlideId('previous')
          }
        default:
          // No scrolling occured
          return {
            snap: false,
            slide: getSlideId('current')
          }
      }
    }

    // Get the ID of the current, next or previous slide to scroll to after snap
    const getSlideId = (value) => {
      switch(true) {
        case value === 'current':
          return currentSlide
        case value === 'next':
          const nextSlide = currentSlide + 1
          return nextSlide <= totalSlides ? nextSlide : currentSlide
        case value === 'previous':
          const previousSlide = currentSlide - 1
          return previousSlide >= 1 ? previousSlide : currentSlide
        default:
          return currentSlide
      }
    }

    // Run only if scrolling or mouse events occur in the Slideshow component
    if(prevProps !== this.props && isImageLoaded) {
      // If mouse is down, set state to scroll the slides within boundaries
      if(isMouseDown) {
        let scrollTo = getScrollWithBoundaries()

        this.setState({ 
          scrollTo,
          snapTo: false,
          isResized: false
        })
      }
      
      /*
      if mouse is up
      1. Set the snap direction and next slide if scrolling occured
      2. Set the currentSlide to be the next slide
      3. Set scrollTo and slidesX to the position of the next slide
      so scrolling starts at the correct position after the next mouse
      down event
      */
      if(!isMouseDown) {
        const snapTo = getSnapAndSlideId()

        this.setState({
          scrollTo: -Math.abs((slideWidth * snapTo.slide) - slideWidth),
          slidesX: -Math.abs((slideWidth * snapTo.slide) - slideWidth),
          snapTo,
          currentSlide: snapTo.slide
        })
      }
    }
  }

  imageLoaded = (e) => {
    const { totalSlides } = this.state

    const slideWidth = e.target.scrollWidth
    const maxScroll = slideWidth * (totalSlides - 1)

    this.setState({
      isImageLoaded: true,
      maxScroll,
      slideWidth
    })
  }

  render() {
    const { 
      scrollTo, 
      isImageLoaded, 
      snapTo, 
      currentSlide, 
      slideWidth,
      isResized
    } = this.state

    const selectedSlidePos = -Math.abs((slideWidth * currentSlide) - slideWidth)

    let scrollTransition = snapTo ? {
        transform: `translateX(${selectedSlidePos}px)`,
        transition: isResized ? 'none' : 'transform 250ms ease'
      } : {
        transform: `translateX(${scrollTo}px)`
      }
    
    return(
      <div ref={node => this.slidesContainer = node} className="slides-container" style={scrollTransition}>
        {!isImageLoaded && <h3>Loading...</h3>}
        <div className ="slide" style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}><img draggable="false" src="https://picsum.photos/1366/768 "/></div>
        <div className ="slide" style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}><img draggable="false" src="https://picsum.photos/1366/767 "/></div>
        <div className ="slide" style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}><img draggable="false" src="https://picsum.photos/1366/766 "/></div>
        <div className ="slide" style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}><img draggable="false" src="https://picsum.photos/1366/765 "/></div>
        <div className ="slide" style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}><img onLoad={this.imageLoaded} draggable="false" src="https://picsum.photos/1366/764 "/></div>
      </div>
    )
  }
}

export default Slides