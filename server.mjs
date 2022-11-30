import express from 'express';
import path from 'path';
import cors from 'cors';


const app = express()
const port = process.env.PORT || 5001;

app.use(cors());

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


app.get('/weather:cityName', (req, res) => {

  console.log('request ip:', req.ip);
  console.log('params:', req.params.cityName);


  res.send(
    {
    city: req.params.cityName,
    temp:26,
    min:23,
    max:30,
    humadity:72,
  }
  )
}) 


const __dirname =path.resolve();

app.use('/', express.static(path.join(__dirname, './web/build')))
app.use('*', express.static(path.join(__dirname, './web/build')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})