async function Post(url, body){
    return await fetch('https://localhost:7033/' + url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(body)
    }).then((response) => response.json());
}

export default Post;