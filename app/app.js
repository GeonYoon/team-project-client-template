import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import {IndexRoute, Router, Route, browserHistory } from 'react-router';
import SavePages from './components/savePage';
import Sidebar from './components/sidebar';
import AboutPage from './components/about';
import ProfilePage from './components/profile';
import CourseHistoryPage from './components/courseHistory';
import CourseDetails from './components/coursedetails';

class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3" id="side-bar">
            <Sidebar />
            </div>
            <div className="col-md-9 main-app-canvas">
              <img src="../img/main_mock_1.png" className="img-responsive"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <AboutPage user={1}/>
    );
  }
}

class SavePage extends React.Component {
  render() {
    return (
      <SavePages />
    );
  }
}

class CourseHistory extends React.Component {
  render() {
    return (
      <CourseHistoryPage />
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <ProfilePage />
    );
  }
}

class Course extends React.Component {
  render(){
    return (
      <CourseDetails course={1}/>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div><Navbar/>
      {this.props.children}</div>
    )
  }
}


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/savepage" component={SavePage} />
      <Route path="/coursehistory" component={CourseHistory} />
      <Route path="/profile" component={Profile} />
      <Route path = "/course/:course" component={Course} />
    </Route>
  </Router>
),document.getElementById('app'));
