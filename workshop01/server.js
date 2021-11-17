import express from 'express'
import {engine as handlebars} from 'express-handlebars'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'))

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main',
    extname: 'hbs'
}));

// Routing
app.get('/',(req, res)=>{res.render('index')})

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("Server started at port", port)
})