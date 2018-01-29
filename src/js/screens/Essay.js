import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from 'grommet/components/Article';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import { Redirect } from 'react-router';
import Anchor from 'grommet/components/Anchor';
import Value from 'grommet/components/Value';
import Image from 'grommet/components/Image';

import axios from 'axios';
import _ from 'lodash';

class Essay extends Component {
    constructor(props) {
      super(props);
      this.sampleArticle={
        author:'rayshaw',
        title:'Hello Ant Science',
        content:['Biographies of world leaders, including U.S. President Donald Trump,' + 
        ' South Korean President Moon Jae-in, and French President Emmanuel Macron, ' + 
        'have become best sellers in China.','MD5:pics','hello'],
        time:'2018-01-02 09:31'
      };
      this.state = { 
        props:this.props,
        article:this.sampleArticle
      };
    }

    componentWillMount() {
      let setState = this.setState.bind(this);
      let state = this.state;
      let subPath = new String(state.props.location.pathname);
      let url = 'http://39.104.87.44:8017/getArticle' + subPath.substr(subPath.lastIndexOf('/'));
      console.log({"mount":state});
      axios.post(url, null, {
        headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function (response) {
        console.log(response);
        setState({
          article:{
            content:response.data.content,
            author:response.data.authorName,
            title:response.data.title,
            time:response.data.createTime
          },
          props:state.props
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
    handleOnClick() {
      this.setState({ redirect: true });
    }
  
    render() {
      console.log({"render":this.state});
      const { nav: { items }, redirect, login } = this.state.props;
      let {article} = this.state;
      if (redirect) {
        return <Redirect push to='/home' />;
      }
      const links = items.map(page => (
        <Anchor key={page.label} path={page.path} label={page.label} className='headBarAnchor' />
      ));

      let tags={};

      let note = null;

      let content = article.content.map((c,i) => {
        console.log(c);
        console.log(_.startsWith(c,"data:image/jpeg;base64"));
        if(c&&_.startsWith(c,"data:image/jpeg;base64")){
        return (<Paragraph key={i} className="paragraph"><Image className="image" src={c} /> {note &&<p className="note">{note}</p>}</Paragraph>);
        } else {
        return (<Paragraph key={i} className="paragraph">{c}</Paragraph>);
        }
      });
      console.log(content);
      return (
        <Article className="essay">
          <Section className="border">  
            <Headline className="title" size="small" align="left" >
              {article.title}
            </Headline>
              {article.author}{article.time==null?'':'  发表于  ' + article.time}
          </Section>
          <Section>
            {content}
          </Section>
          <Section>

          </Section>
        </Article>
      );
    }
  }

const select = state => ({
  nav: state.nav
});

export default connect(select)(Essay);