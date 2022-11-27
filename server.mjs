import express from 'express';
import path from 'path';

// console.log('Aahad')


const app = express()
const port = process.env.PORT || 5001;

app.get('/abc', (req, res) => {

  console.log('request :', req.ip)

  res.send('<h1>abc</h1>')
}) 

app.get('/about', (req, res) => {

  console.log('request :', req.ip)

  res.send('<h1>about</h1>')
}) 

app.get('/contact', (req, res) => {

  console.log('request :', req.ip)

  res.send('<h1>contact</h1>')
}) 


const __dirname =path.resolve();

app.use('/', express.static(path.join(__dirname, './web/build')))
app.use('*', express.static(path.join(__dirname, './web/build')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})