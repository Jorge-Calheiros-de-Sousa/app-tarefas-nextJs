import Tarefa from "../core/Tarefas";
import Footer from "./Footer";
import Header from "./Header";
import style from "./Layout.module.css";

interface IConfigsHeaders {
    tarefas: Tarefa[],
    tarefaAtual: Tarefa
    click: any
}


interface IProps {
    children: any,
    configs: IConfigsHeaders
}

export default function Layout(props: IProps) {
    return (
        <div className={style.layout}>
            <Header configs={props.configs} />
            <main className={style.main}>
                {props.children}
            </main>
            <Footer configs={props.configs} />
        </div>
    )
}