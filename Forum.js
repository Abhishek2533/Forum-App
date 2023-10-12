// creating json file : araay of objects
var forums = [
    {
        id: 1,
        title: "Comment 1",
        author: "Sam",
        date: Date.now(),
        content: "Comment content",
        comments: [
            {
                author: "Sam 1",
                date: Date.now(),
                content: "Comment content 1",
            },
            {
                author: "Sam 2",
                date: Date.now(),
                content: "Comment content 2",
            }
        ]
    },
    {
        id: 2,
        title: "Comment 2",
        author: "Sam",
        date: Date.now(),
        content: "Comment content",
        comments: [
            {
                author: "Sam 1",
                date: Date.now(),
                content: "Comment content 1",
            },
            {
                author: "Sam 2",
                date: Date.now(),
                content: "Comment content 2",
            }
        ]
    },
];

if(localStorage && localStorage.getItem('forums')) {
    // local storage only strings so,,,, convert to string to objcet
    forums = JSON.parse(localStorage.getItem('forums'));
}
else {
    forums = defaultForums;
    // object to string
    localStorage.setItem('forums', JSON.stringify(defaultForums));
}