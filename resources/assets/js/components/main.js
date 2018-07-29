import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import NewProject from './NewProject'
import ProjectsList from './ProjectsList'
import SingleProject from './SingleProject'

class App extends Component {
  constructor(){
    super()
    this.state = {
      element3: 'asdf'
    }
  }
  render () {
    const element2 = (
      <h1 className="greeting text-center">
      Hello, world!
      </h1>
    )
    return (
      <BrowserRouter>
        <div>
          <Header />{this.state.element3}
          <Switch>
            <Route exact path='/' component={ProjectsList} />
            <Route path='/create' component={NewProject} />
            <Route path='/:id' component={SingleProject} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
