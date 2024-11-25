/**
 * -------------------
 * Mongodb Connection
 * -------------------
 * 1. creat account 
 * 2. creat an user with password
 * 3. whitelist IP address  
 * 4. database > connect > driver > node > view full code
 * 4. change the password the uri
 * --------------------
 * 1. CREAT ---- POST
 * 2. app.post("/users", async (rqe,res)=> {})
 * 3. make the function async to use the await inside it
 * 4. make sure you use the express.json() middleware
 * 5. access data from the body : const user = req.body 
 * 6. const result = await userCollection.insertOne(doc);
 * 7. res.send(result)
 * 
 * 
 * CLIENT
 * 1.creat fetch
 * 2. add second parameter as an object
 * 3. provide method: 'POST'
 * 4. add header: {'content-type':'application/json'}
 * 5. add body : JSON.Stringify(user)
 * 
 * 
 * 
 * --------------------
 * RAED MANY
 * --------------------
 * 1. craat a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * --------------------
 * DELETE
 * --------------------
 * 1. creat app.delete('/users/:id, async(req,res)=>{})
 * 2. specify umique ObejctId o delete right user 
 * 3. const query = {_id: new ObjectId(id)}
 * 4. const result = await userColletction.deletOne(query)
 * 
 * Client
 * 1. creat dynamic url with id
 * 2. mention the DELETE method
 * 
 * 
 * 
 * 
 * 
 * 
 */