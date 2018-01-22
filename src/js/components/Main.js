import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginLayer from './LoginLayer';
import App from 'grommet/components/App';

import { navResponsive } from '../actions/nav';

import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Tasks from '../screens/Tasks';
import Task from '../screens/Task';
import NotFound from '../screens/NotFound';
import Home from '../screens/Home';
import HeadeBar from './HeadeBar';
import Acticle from '../screens/Acticle';

import { Box } from 'grommet';

class Main extends Component {
  constructor(props) {
    super(props);
    this._onResponsive = this._onResponsive.bind(this);
    this.state = {
      showLogin: false
    };
  }

  _onResponsive(responsive) {
    this.props.dispatch(navResponsive(responsive));
  }

  render() {
    const onLogin = () => {
      this.setState({
        showLogin: true
      });
    };

    const onClose = () => {
      this.setState({
        showLogin: false
      });
    };
    const { showLogin } = this.state;
    return (
      <App centered={false}>
        <Router>
          <Box>
            <HeadeBar login={onLogin} />
            <Switch>
              <Route exact={true} path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/login' component={Login} />
              <Route path='/tasks/:id' component={Task} />
              <Route path='/tasks' component={Tasks} />
              <Route path='/article/:id' component={Acticle} />
              <Route path='/*' component={NotFound} />
            </Switch>
            {showLogin && <LoginLayer onClose={onClose} />}
          </Box>
        </Router>
      </App>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const select = state => ({
  nav: state.nav
});

export default connect(select)(Main);
