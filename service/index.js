const app = require('express')();
const {get} = require('superagent');

app.get('/', (req, res)=>{
  console.log(`${process.env.NAME}: GET /`);
  res.send(`
    <html>
      <body>
        <h1>Hello World from ${process.env.NAME}</h1>
      </body>
    </html>
  `);
});


app.get('/proxy', (req, res) => {
  console.log(`${process.env.NAME}: proxy to ${process.env.LINK}`);
  get(process.env.LINK).then(x=>{
    res.end(x.text)
  });
});



app.listen('3000', ()=>console.log('started service on port 3000'));