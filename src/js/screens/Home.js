import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import { pageLoaded } from './utils';
import { Box } from 'grommet';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentWillMount() {
    axios.post('').then((response) => {
      console.log(response);
    });
  }
  componentDidMount() {
    pageLoaded('Home');
  }

  render() {
    return (
      <Box />
    );
  }
}

Home.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.dashboard });

export default connect(select)(Home);
