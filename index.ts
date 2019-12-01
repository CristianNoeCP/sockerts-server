import Server from './classes/server';
import { router } from './routes/router';
import BodyParser from 'body-parser';
import Cors from 'cors';


const server = new Server();
//bodyParser use
server.app.use(BodyParser.urlencoded({extended:true}));
server.app.use(BodyParser.json());
//cors
server.app.use(Cors({origin:true,credentials:true}));
//Rutas de servicios
server.app.use('/' , router);

server.Start(()=>{
    console.log(`Servidor corriendo en  el puerto ${server.port}`);
});