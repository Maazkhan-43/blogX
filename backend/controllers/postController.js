
let posts = [{
    "id" : 1,
    "title" : 'This is a sample post',
    "description" : 'This is a sample post neimg written in backend js for illustration',
    "tage" : ["firstpost","ExpressBackend"],
    "author" : 'System',
    "likes" : 0,
    "created_at" : Date.now(),
    "last_modified_at" : Date.now(),

},{
    "id" : 2,
    "title" : 'This is another sample post',
    "description" : 'This is another sample post written in backend js for illustration',
    "tage" : ["secondpost","ExpressBackend"],
    "author" : 'System',
    "likes" : 0,
    "created_at" : Date.now(),
    "last_modified_at" : Date.now(),
    
}];

export function getAllPosts(req,res){
   return res.status(200).send(posts);
}

export function getPostById(req,res){
    let resultPost = null;

    for(post of posts){
        if(post.id == Number(req.params.id)){
            resultPost = post;
            break;
        }
    }
   return res.status(200).send(resultPost);
}