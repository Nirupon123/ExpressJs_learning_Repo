const express= require('express');
const app = express();
const port = 8080;
app.listen(port,()=>{
    console.log(`server is on at ${port}`)
})
/*GET request sending*/
app.get('/',(req,res)=>{
    res.send("i connected to the root path")
})
/*path params*/
const userid="123";
const userName="nirupon";
app.get('/:userid/:userName', (req, res) => {
    const { userid, userName } = req.params;
    res.send(`This is a user ID of ${userid} and name ${userName}`);
});
/*query string*/
app.get('/search',(req,res)=>{
    let{q}= req.query;
    if(!q){
        console.log("nothing found")
    }
    console.log(req.query);
    res.send(`this is:  ${q}`)
})