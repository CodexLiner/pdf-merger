const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')
const {mergerPdfs} = require('./merge')
const upload = multer({dest:'uploads/'})
// app.use('/static',express.static('./public'));
app.use(express.static(__dirname + '/public'));
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"templates/index.html"))
})
// app.post('/merge', upload.array('pdfs',2), async (req,res,next)=>{
//     console.log(req.file);
//     let a = await mergerPdfs(path.join(__dirname,req.files[0].path), path.join(__dirname,req.files[1].path))
//     res.redirect(`http://localhost:3000/static/${a}.pdf`)
// })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))