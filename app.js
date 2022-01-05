server = require('express')

express = server()

express.get('/',(req,res) => {
    console.log('recieved get request')
    res.send('<h1>Performed Get Request</h1>')
});

express.get('/addTodo',(req,res) => {
    task = task+req.query.task
    console.log(task)
})

express.listen(2500)


