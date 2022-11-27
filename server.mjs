import express from 'express';
import path from 'path';

// console.log('Aahad')


const app = express()
const port = process.env.PORT || 3000;

app.get('/abc', (req, res) => {

  console.log('request :', req.ip)

  res.send('sdgsgsd')
}) 


const __dirname =path.resolve();

app.use('/', express.static(path.join(__dirname, './web/build')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})