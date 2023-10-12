console.log(forums);
var container = document.querySelector('ol');

for (let forum of forums) {
    var html = `
    <li class="row">
        <a href="/Post.html?id${forum.id}">
            <h4 class="title">${forum.title}</h4>
            <div class="bottom">
                <p class="timestamp">${new Date(forum.date).toLocaleString()}</p>
                <p class="comment-count">${forum.comments.length} comments</p>
            </div>
        </a>
    </li>
    `;
    container.insertAdjacentHTML('beforeend', html);
}