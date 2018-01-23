import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios/index';
import { Box, Section, Headline, TextInput, Label } from 'grommet';
import { Editor, EditorState } from 'draft-js';

export default class AddEssay extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
  }

  render() {
    const BoxStyle = { width: '80%' };
    return (
      <Box style={BoxStyle} align='center' >
        <Label> 标题 </Label><TextInput />
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </Box>

    );
  }
}
