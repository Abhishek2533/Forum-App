var id = window.location.search.slice(-1);
var forum = forums.find(t => t.id == id);
console.log(forum);

var header = document.querySelector('.header');
var headerHtml = `
    <h4 class="title">${forum.title}</h4>
    <div class="bottom">
        <p class="timestamp">${new Date(forum.date).toLocaleString()}</p>
        <p class="comment-count">${forum.comments.length} comments</p>
    </div>
`;
header.insertAdjacentHTML('beforeend', headerHtml);



function addCommnet(comment) {
    var commentHtml = `
        <div class="comments">
            <div class="top-comment">
                <p class="user">${comment.author}</p>
                <p class="timestamp">${new Date(comment.date).toLocaleString()}</p>
            </div>
            <div class="comment-content">
                ${comment.content}
            </div>
        </div>
    `;
    comments.insertAdjacentHTML('beforeend', commentHtml);
}


var comments = document.querySelector('.comments')
for (let comment of forum.comments) {
    addCommnet(comment);
}

var btn = document.querySelector('button');
btn.addEventListener('click', function() {
    var txt = document.querySelector('textarea');
    var comment = {
        content: txt.value,
        date: Date.now(),
        author: 'Sam'
    }
    addCommnet(comment);
    txt.value = '';
    forum.comments.push(comment);
    localStorage.setItem('forums', JSON.stringify(forum));
})