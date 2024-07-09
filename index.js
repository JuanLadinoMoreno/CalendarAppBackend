import dotenv from "dotenv";
import express from "express"; 
import cors from 'cors'
import auth from './src/routes/auth.js'
import events from './src/routes/events.js'
import { dbConnection } from "./src/database/config.js";

dotenv.config()

const PORT = process.env.PORT;

const app = express();

dbConnection()

app.use(cors())
// app.use(cors({
//     // origin: 'http://127.0.0.1:5173',
//     origin: 'http://localhost:5173',
//     credentials: true
// }))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//Directorio para mostrar el index
app.use(express.static('public'))

// Lectura y parseo del body
app.use( express.json() );



//Rutas
app.use('/api/auth', auth)
app.use('/api/events', events );






app.listen(PORT, () => {
    console.log(`Server listen in port ${PORT} `);
})



console.log('hola munasdasddo');