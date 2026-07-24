const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

fetch(`http://localhost:42739/posts/${postId}`)
  .then(res => res.json())
  .then(post => {
    document.getElementById("post-container").innerHTML = `
      <h1>${post.title}</h1>
      <p>${post.date} • ${post.category}</p>
      <img src="${post.image}" alt="${post.title}" class="post-image"/>
      <div class="post-content">
          ${post.content}
      </div>
    `;
  });
