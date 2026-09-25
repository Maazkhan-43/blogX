
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
    const id = Number(req.params.id);

    if(!id){
        return res.status(400).send({"data" : resultPost
                                        ,"message" : "Request id is not a number. please try again."
                });
    }
    resultPost = posts.find(post => post.id === id);
    if(!resultPost){
        return res.status(404).send({"data" : resultPost
                                        ,"message" : `No post found with id: ${id}`
                });
    }

    return res.status(200).send({"data" : resultPost
                                        ,"message" : `Success. Post found with id: ${id}`
                });
}