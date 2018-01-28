import React, { Component } from 'react';
import axios from 'axios/index';
import { Box, Form, Layer, Tab, Tabs, Button } from 'grommet';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class LoginLayer extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentWillMount() {
    axios.post('').then((response) => {
      console.log(response);
    });
  }
  postLogin() {
    axios.post('', {
      loginName: 'Fred',
      loginPwd: 'Flintstone'
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  postSetUp() {
    axios.post('', {
      setUpName: 'Fred',
      setUpPwd: 'Flintstone'
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  _onChang(event, value) {
    this.setState({
      [event.target.name]: value
    });
  }

  render() {
    const { onClose } = this.state;
    console.log(this.state);
    const style = { margin: '20' };
    return (
      <Layer align='center' closer={true} onClose={onClose}>
        <Box style={style} >
          <MuiThemeProvider>
            <Tabs>
              <Tab title='登录' >
                <Toggle label='手机验证码登录' name='isPhoneLogin' onToggle={(event, isInputChecked) => {
                  this._onChang(event, isInputChecked);
                }} />
                <Form>
                  <TextField
                    name='login_name'
                    hintText='用户名'
                    floatingLabelText='请输入用户名'
                    fullWidth={true}
                    value={this.state.loginName}
                  />
                  <TextField
                    name='login_pwd'
                    hintText='密码'
                    floatingLabelText='请输入密码'
                    type='password'
                    fullWidth={true}
                    value={this.state.loginPwd}
                  />
                </Form>
                <Button label='登录' type='submit' primary={true} onSubmit={this.postLogin()} style={{ marginRight: '5px', marginLeft: 'auto', display: 'inline-block' }} />
              </Tab>
              <Tab title='注册'>
                <Form>
                  <TextField
                    name='setUp_name'
                    hintText='昵称'
                    floatingLabelText='请给自己设置昵称'
                    fullWidth={true}
                    value={this.state.setUpName}
                  />
                  <TextField
                    name='setUp_pwd'
                    hintText='密码'
                    floatingLabelText='请设置密码'
                    type='password'
                    fullWidth={true}
                    value={this.state.setUpPwd}
                  />
                </Form>
                <Button label='注册' primary={true} type='submit' onSubmit={this.postSetUp()}style={{ marginRight: '5px', marginLeft: 'auto', display: 'inline-block' }} />
              </Tab>
            </Tabs>
          </MuiThemeProvider>
        </Box>
      </Layer>
    );
  }
}
