import { Database } from "sqlite";

export class CRUD{
    private conexion: Promise<Database>;
    constructor(conexion:Promise<Database>){
        
        this.conexion = conexion;
    }

    async insertar(sentenciaSQL:String){
        (await this.conexion).run(`${sentenciaSQL}`)
    }

    async lerUnhaFila(sentenciaSQL:String):Promise<Object>{
        let dato = (await this.conexion).get(`${sentenciaSQL}`)
        console.log("dato en funcion ler ",await dato)
        return await dato
    }

    async lerTodasAsFilas(sentenciaSQL:String):Promise<Object>{
        let datos = (await this.conexion).all(`${sentenciaSQL}`)
        return await datos
    }
    
}