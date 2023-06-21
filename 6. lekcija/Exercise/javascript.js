// 5. uzdevums

async function fetchAllPosts() {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        displayAllPosts(data.posts);
    } catch (error) {
        console.error('Error fetching product catalog:', error);
    }
}

function displayAllPosts(posts) {
    const allPostContainer = document.getElementById('all-posts');
    allPostContainer.innerHTML = '';

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('col-lg-3', 'col-md-4', 'mb-4');
        postCard.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
            <p class="card-text">Reactions: ${post.reactions}</p>
            <p class="card-text">Tags ${post.tags}</p>
          </div>
        </div>
      `;
        allPostContainer.appendChild(postCard);
    });


}

fetchAllPosts();

// ---------