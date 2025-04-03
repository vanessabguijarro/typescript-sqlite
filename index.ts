import { CreoBBDD } from "./CLASES/CreoBBDD";
import { CRUD } from "./CLASES/CRUD";
import { InfoBBDD } from "./Interfaces/InfoBBDD";

let datosBBDD: InfoBBDD = {
    bbdd: 'basedatos.db',
    ruta: '.',
    sentenciaTablas: `CREATE TABLE if not exists USERS(
        ID_USER     INTEGER,
        NOME_USER   TEXT(50)
    );`
}

let bbdd = new CreoBBDD(datosBBDD);
//let sentenciaInsertar = `INSERT INTO USERS('ID_USER','NOME_USER') VALUES(1,'Pepito')`;
let sentenciaInsertar = `INSERT INTO USERS('ID_USER','NOME_USER') VALUES(2,'JUANITO')`;
let sentenciaLer = `SELECT * FROM USERS`;
let operacion = new CRUD(bbdd.conexionBBDD())
operacion.insertar(sentenciaInsertar).catch((error) => console.error(error))
//operacion.lerUnhaFila(sentenciaLer).then(dato => console.log("O dato no index.ts ",dato)).catch(error => console.error(error))
operacion.lerTodasAsFilas(sentenciaLer).then(datos => console.log("Os datos son ",datos)).catch(error => console.error(error))