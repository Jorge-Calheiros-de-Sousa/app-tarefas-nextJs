import nc from "next-connect";
import { index } from "../../../controller/Tarefa";

const handler = nc();

handler.get(index);

export default handler