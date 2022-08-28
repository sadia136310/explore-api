function loadpost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayUser(data))
}
function displayUser(posts) {
    const postConatiner = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');

        postDiv.classList.add('post')
        console.log(post);

        postDiv.innerHTML = `
        <h4>name: ${post.userId} <h4>
        <h5>title: ${post.title} </h5>
        <p>discription: ${post.body} </p>
        `
        postConatiner.appendChild(postDiv)
    }
}
loadpost()