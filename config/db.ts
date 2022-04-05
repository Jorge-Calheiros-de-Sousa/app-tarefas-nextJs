import { rejects } from "assert";
import { createPool, Query } from "mysql";

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "data"
})

pool.getConnection((erro) => {
    console.log(`Erro ao conectar com o banco de dados: ${erro}`);
})

function executeQuery(query: string, arrParam: any) {
    return new Promise((resolve, rejects) => {
        try {
            pool.query(query, arrParam, (err, data) => {
                if (err) {
                    console.log("erro ao executar a query");
                    rejects(err);
                } else {
                    resolve(data);
                }
            })
        } catch (error) {
            rejects(error);
        }
    })
}

export { executeQuery };