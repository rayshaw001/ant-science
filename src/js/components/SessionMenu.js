import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import UserIcon from 'grommet/components/icons/base/User';

import { logout } from '../actions/session';

class SessionMenu extends Component {
  constructor() {
    super();
    this._onLogout = this._onLogout.bind(this);
  }

  _onLogout(event) {
    const { session } = this.props;
    event.preventDefault();
    this.props.dispatch(logout(session));
  }

  render() {
    const localStorage = window.localStorage;
    const userName = localStorage.name;
    const { login } = this.props;
    const style = { marginLeft: '20px' };
    return (
      <Box style={style}>
        {userName == null ? <Anchor href='#' onClick={login} label='登陆/注册' /> :
        <Menu icon={<UserIcon />} dropAlign={{ right: 'right' }} a11yTitle='Session' label={userName}>
          <Anchor href='#' onClick={this._onLogout} label='退出' />
        </Menu>}
      </Box>
    );
  }
}

SessionMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired
};

const select = state => ({
  session: state.session
});

export default connect(select)(SessionMenu);
