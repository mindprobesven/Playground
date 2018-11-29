import React, { Component } from 'react';

class AnimateElements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      fadeIn: false
    }
  }
  
  componentDidMount() {
    console.log('Mounted');
    console.log('Set Fade In');
    this.setFadeInState();
  }

  
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    
    if(prevState !== this.state) {
      console.log('State Update');

      if(this.state.fadeIn) {
        console.log('Set Fade Out');

        this.fadeTimer = setTimeout(() => {
          console.log('Fade Timer');
          this.setFadeOutState()
        }, 1);
 
      }
      
    }
  }

  setFadeInState = () => {
    let children = this.props.children.slice();

    let childrenArray = [];   
    let currentIndex = 0;

    children.map((child, index) => {
      currentIndex = index + 1;

      let subChildrenArray = [];
      if(Array.isArray(child.props.children)) {
        const subChildren = child.props.children.slice();
        subChildren.map((subChild, index) => {
          const subClone = React.cloneElement(subChild, {
            key: currentIndex + (1000 * (index + 1)),
            style: {
              opacity: 0,
              transform: 'translate(0, 50%)'
            }
          });

          subChildrenArray.push(subClone);
        }); 
      }
      
      const clone = React.cloneElement(child, {
        key: currentIndex,
        children: subChildrenArray,
        style: {
          transform: 'translate(0, 50%)'
        }
      });

      childrenArray.push(clone);
    });

    this.setState(prevState => {
      return (
        {
          children: childrenArray,
          fadeIn: true
        }
      )
    });
  }

  setFadeOutState = () => {
    let children = this.state.children.slice();

    let childrenArray = [];   
    let currentIndex = 0;

    children.map((child, index) => {
      currentIndex = index + 1;

      let subChildrenArray = [];
      if(Array.isArray(child.props.children)) {
        const subChildren = child.props.children.slice();
        subChildren.map((subChild, index) => {
          const subClone = React.cloneElement(subChild, {
            key: currentIndex + (1000 * (index + 1)),
            style: {
              opacity: 1,
              transform: 'translate(0, 0)',
              transition: `transform 250ms ease ${((100 * (index + 1)) + (currentIndex * 100)).toString()}ms, 
                           opacity 250ms ease ${((100 * (index + 1)) + (currentIndex * 100)).toString()}ms` 
            }
          });

          subChildrenArray.push(subClone);
        }); 
      }
      
      const clone = React.cloneElement(child, {
        key: currentIndex,
        children: subChildrenArray,
        style: {
          transform: 'translate(0, 0)',
          transition: `transform 500ms ease ${(100 * (index + 1).toString())}ms`
        }
      });

      childrenArray.push(clone);
    });

    this.setState(prevState => ({
      children: childrenArray,
      fadeIn: false
    }));
  }

  render() {
    const children = this.state.children;

    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }
}

class App extends Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="App">
        <div className="ContentBox">
          <AnimateElements>
          <div className="Header">
            <button>Link</button>
            <button>Link</button>
            <button>Link</button>
            <button>Link</button>
          </div>
          <div className="Column">
              <div className="Box">Box</div>
              <div className="Box">Box</div>
              <div className="Box">Box</div>
              <div className="Box">Box</div>
              <div className="Box">Box</div>
              <div className="Box">Box</div>
          </div>
          <div className="Column">
              <div className="Box">Box</div>
              <div className="Box">Box</div>
              <div className="Box">Box</div>
              <div className="Box">Box</div>
              <div className="Box">Box</div>
              <div className="Box">Box</div>
          </div>
          <div className="Column">
            <div className="Box">Box</div>
            <div className="Box">Box</div>
            <div className="Box">Box</div>
            <div className="Box">Box</div>
            <div className="Box">Box</div>
            <div className="Box">Box</div>
          </div>
          <div className="Column">
            <div className="Box">Box</div>
            <div className="Box">Box</div>
            <div className="Box">Box</div>
            <div className="Box">Box</div>
            <div className="Box">Box</div>
            <div className="Box">Box</div>
          </div>
          </AnimateElements>
        </div>
      </div>
    )
  }  
}

export default App;