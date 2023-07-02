var posts = [
    {id:1,title:'古い投稿'},
    {id:2,title:'新しい投稿'},
];

var comment = {postId:2,content:'イイネm！'};

function postForComment(posts,comment){
    return posts.find(function(post){
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts,comment));