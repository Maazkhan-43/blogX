

let posts = [];

export function getAllPosts(req,res){
   return res.status(200).send(posts);
}

export function getPostById(req,res){
    let resultPost = null;
    const id = req.params.id;

    if(!id){
        return res.status(400).send({"data" : resultPost
                                        ,"message" : "Request id is not a number. please try again."
                });
    }
    resultPost = posts.find((post) => post.id === id);
    if(!resultPost){
        return res.status(404).send({"data" : resultPost
                                        ,"message" : `No post found with id: ${id}`
                });
    }

    return res.status(200).send({"data" : resultPost
                                        ,"message" : `Success. Post found with id: ${id}`
                });
}
export function createPost(req,res){
    const clientpostObj = req.body;

    const serverpostobj = {...clientpostObj};
    serverpostobj.id = crypto.randomUUID();
    serverpostobj.created_at=Date.now();
    serverpostobj.last_modified_at= Date.now();

    posts.push(serverpostobj);
    
    return res.status(200)
                .send({
                    "data":serverpostobj,
                    "message":'recieved the post succesfully'
                })
}

export function updatepostByid(req,res){
    const id = req.param.id;
    const newclientobj = req.body;
    const serverpostobj = posts.find((post) => post.id === id);
    if(!serverpostobj){
        
    }
    const serverId = serverpostobj.id;
    const created_at = serverpostobj.created_at;

    serverpostobj = {...newclientobj};
    serverpostobj.id = serverId;
    serverpostobj.created_at = created_at;
    serverpostobj.last_modified_at = Date.now();
    return req.status(200)
                .send({"data": serverpostobj,
                    "message" : "updated succerfully"
                })
}