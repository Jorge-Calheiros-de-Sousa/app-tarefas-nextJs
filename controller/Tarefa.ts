import { NextApiRequest, NextApiResponse } from "next";
import { executeQuery } from "../config/db";


async function index(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = await executeQuery("select tarefas.id, tarefas.lista, conteudos.nome, conteudos.estado from  tarefas join(conteudos)where tarefas.id = conteudos.tarefa", []);
    res.send(data);
}

export { index }