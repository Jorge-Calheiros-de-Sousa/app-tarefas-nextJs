import Link from "next/link";
import Tarefa from "../core/Tarefas";
import style from "./Header.module.css";

interface IConfigsHeaders {
    tarefas: Tarefa[],
    tarefaAtual: Tarefa
    click: any
}


interface IProps {
    configs: IConfigsHeaders
}

export default function Header(props: IProps) {


    function renderizarNomesTarefas() {
        return props.configs.tarefas.map((tarefa) => {
            return <li key={tarefa.getId} tarefa-id={tarefa.getId} onClick={props.configs.click}>{tarefa.getNome}</li>
        })
    }


    return (
        <header className={style.header}>
            <div className={style.titulo}>
                Tarefas
            </div>
            <nav className={style.masterList}>
                <ul className={style.list}>
                    <li>Minhas Tarefas</li>
                    {renderizarNomesTarefas()}
                    <Link href={"/create/formulario"}>
                        <li>Adicionar lista +</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}