import axios from 'axios';

async function Post(url, body, config=null){
    return await axios.post('https://localhost:7033/' + url, body, config);
}

export default Post;

export {
    Post
}