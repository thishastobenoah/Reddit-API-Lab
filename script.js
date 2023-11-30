async function getData(){
    try{
        let response = await fetch('https://www.reddit.com/r/aww/.json');

        let data = await response.json();
        return data.data.children;
    }catch(e){
        console.log(e);
    }
}

getData().then(posts => {
    const parent = document.body;


    const listEl = document.createElement('ul');
    parent.appendChild(listEl);

    for(let post of posts){
        const postEl = document.createElement('li');

        const titleEl = document.createElement('h3');
        titleEl.innerText = post.data.title;
        postEl.appendChild(titleEl);

        const imageEl = document.createElement('img');
        imageEl.src = post.data.thumbnail;
        postEl.appendChild(imageEl);


        const linkEl = document.createElement('a');
        linkEl.href = `https://www.reddit.com${post.data.permalink}`;
        linkEl.textContent = 'View Post';
        postEl.appendChild(linkEl);

        listEl.appendChild(postEl);
    }
})