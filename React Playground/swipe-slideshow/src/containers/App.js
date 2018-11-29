import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Slideshow from './Slideshow';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="nav-list">
            <Link to="/"><li>Home</li></Link>
            <Link to="/slideshow"><li>Mount Slideshow</li></Link>
          </ul>
          <hr />
          <Route exact path="/" render={() => <p>Mount the slideshow</p>} />
          <Route path="/slideshow" component={Slideshow} />
        </div>
      </Router>
    )
  }
}

/*
<h3>Swipe Slide v0.5 by Sven Kohn</h3>
          <Slideshow />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum commodo odio vitae commodo. Curabitur egestas lacinia eros eget cursus. Nunc turpis ex, ultricies quis porttitor ac, condimentum non ligula. Pellentesque tincidunt feugiat justo, quis lobortis nisl lobortis eget. Nullam nec tristique augue. Sed hendrerit lorem vitae odio sollicitudin imperdiet. Integer egestas justo ac metus euismod, nec tincidunt eros aliquet. Quisque id finibus urna.</p>
*/

export default App