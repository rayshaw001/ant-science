import React, { Component } from 'react';
import axios from 'axios/index';
import { Section, Headline } from 'grommet';
// import {Editor, EditorState} from 'draft-js';

export default class Essay extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  componentWillMount() {
    const id = this.props.match.params.id;
    axios.post('http://39.104.87.44:8017/getArticle/'+id).then((response) => {
      this.setState({
        article: response.data
      });
    });
  }
  render() {
    const { article } = this.state;
    return (
      <Article>
        <Section pad='large' justify='center' align='center'>
          <Headline margin='none'>
            { article[authorName] }
          </Headline>
        </Section>

      </Article>
    );
  }
}
