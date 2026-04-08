import express from 'express'
import 'dotenv/config'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'
import getProdutos from './routes/productRoutes.js'

const app = express()
const PORT = process.env.PORT || 8383

app.use(express.json())
app.use(cors({
  origin: "*",
}));

const __dirname = path.dirname(fileURLToPath(import.meta.url)); //Pega url do diretorio atual...
const rootPath = path.join(__dirname, '..'); //... e vái um diretorio acima para pegar o root do projeto

app.use(express.static(path.join(rootPath, 'public'))); //Serve os arquivos estáticos da pasta public
app.get('/', (req, res) => {
    res.sendFile(path.join(rootPath, 'public', 'index.html'));
});

app.use('/produtos', getProdutos)

app.listen(PORT, () => console.log(`Servidor esta rodando na porta ${PORT} e pode ser acessado pelo url http://localhost:${PORT}`))
