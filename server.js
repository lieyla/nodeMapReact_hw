const express= require ('express');
const app= express();
var cors= require('cors');
app.use(cors());


app.get('/about', function(req,res){
const data= [{
    name: "vicky",
    id: 3,
},
{
    name:"Kormi",
    id:5,
},
{
    name:"Vianka",
    id: 4,
},
];
    res.send(data)
});
app.listen('3001' , function(req, res){
    console.log("listening on port 3001")
})