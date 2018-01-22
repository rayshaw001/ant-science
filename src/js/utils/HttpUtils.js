import axios from 'axios/index';

export function PostRequest(path) {
  axios.post('http://39.104.87.44:8017/getArticle/'+path).then((response) => {
    return response.body;
  });
}
