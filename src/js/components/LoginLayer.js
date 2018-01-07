import React, { Component } from 'react';
import axios from 'axios/index';
import { Box, Form, FormField, Layer, Tab, Tabs, TextInput } from 'grommet';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';

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
              <Tab title='登录'>
                <Toggle label='手机验证码登录' name='isPhoneLogin' onToggle={(event, isInputChecked) => {
                  this._onChang(event, isInputChecked);
                }} />
                <Form>
                  <FormField label='用户名'>
                    <TextInput />
                  </FormField>
                  <FormField label='密码' error='sample error'>
                    <TextInput />
                  </FormField>
                </Form>
                <RaisedButton label='登录' primary={true} style={{ marginRight: '5px', marginLeft: 'auto', display: 'inline-block' }} />
              </Tab>
              <Tab title='注册'>
                <Form>
                  <FormField label='用户名' error='sample error'>
                    <TextInput />
                  </FormField>
                  <FormField label='密码' error='sample error'>
                    <TextInput />
                  </FormField>
                </Form>
              </Tab>
            </Tabs>
          </MuiThemeProvider>
        </Box>
      </Layer>
    );
  }
}
