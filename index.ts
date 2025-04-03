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
(async () => {
    let operacion = new CRUD(bbdd.conexionBBDD());
    let datos = await operacion.lerTodasAsFilas("SELECT * FROM USERS");
    console.log("Os datos son ", datos);
})();