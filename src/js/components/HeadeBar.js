import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import { Box, Button, Search } from 'grommet';
import SessionMenu from './SessionMenu';
import AddIcon from 'grommet/components/icons/base/Add';


class HeadeBar extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  handleOnClick() {
    this.setState({ redirect: true });
  }

  render() {
    const { nav: { items },  login } = this.state;
    const SessionMenuStyle = { margin: '20' };
    const SearchStyle = { backgroundColor: '#ffffff' };
    const links = items.map(page => (
      <Anchor key={page.label} path={page.path} label={page.label} className='headBarAnchor' />
    ));

    return (
      <Box>
        <Header justify='between' pad={{ horizontal: 'medium', vertical: 'small' }} className='headBar'>
          <Anchor path='/home' label='Ant Science' style={{ fontSize: '24' }} />
          {links}
          <Search inline={true} fill={true} size='medium' placeHolder='输入想搜索的关键字' style={SearchStyle} />
          <SessionMenu ref={this.sessionMenu} login={login} style={SessionMenuStyle} />
          <Button icon={<AddIcon />}  />
        </Header>
      </Box>

    );
  }
}

const select = state => ({
  nav: state.nav
});

export default connect(select)(HeadeBar);
