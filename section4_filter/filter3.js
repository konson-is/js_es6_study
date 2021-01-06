var post = {id: 4, title: '初めての投稿'};
var comments = [
     {postId: 4 , content:'いい記事ですね!'},
     {postId: 3 , content:'勉強になりました'},
     {postId: 4 , content:'なるほど'},
];

function commentsForPost(post,comments){
    return comments.filter(function(comment){
        return comment.postId === post.id
    });
}

console.log(commentsForPost(post,comments));