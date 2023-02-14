import express from 'express'
import { fileURLToPath} from 'url'
import { dirname } from 'path'

const app = express()

const port = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.static(__dirname));

app.get('/', (req, res) => {
    console.log('OPENING PAGE')
    res.sendFile('index.html', { root: __dirname});
})

app.listen(port, () => {
    console.log('RUNNING')
})