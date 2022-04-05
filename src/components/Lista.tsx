import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Tarefa from "../core/Tarefas";
import style from "../styles/Lista.module.css";
import ItemLista from "./ItemLista";

interface IConteudoTarefa {
    nome: string,
    estado: 'concluido' | 'nao concluido'
}
interface IProps {
    titulo?: string,
    mostrar: 'concluidos' | 'nao concluidos',
    tarefa: Tarefa;
    checkConcluido?: any,
    returnConcluido?: any
}

export default function Lista(props: IProps) {
    const concluidas = props.tarefa.getConteudo.length ? props.tarefa.getConteudo.filter(tarefa => tarefa.estado === "concluido") : [];
    const naoConcluidas = props.tarefa.getConteudo.length ? props.tarefa.getConteudo.filter(tarefa => tarefa.estado === "nao concluido") : [];

    function InputOrIcon(conteudo: IConteudoTarefa): HTMLInputElement | any {
        if (conteudo.estado === "concluido") {
            return <span style={{ marginRight: "10px" }} onClick={props.returnConcluido}><FontAwesomeIcon icon={faCheck} color={"cornflowerblue"} /></span>
        } else {
            return (
                <input type={"radio"} onClick={props.checkConcluido} className={style.checkBox} />
            )
        }
    }

    function showListaConcluida() {
        const lista = document.getElementById("hiddenLista");
        if (lista?.classList.contains(style.showLista)) {
            lista?.classList.remove(style.showLista);
        } else {
            lista?.classList.add(style.showLista);
        }
    }

    function renderizarTitutlo() {
        if (props.titulo) {
            if (props.mostrar === "concluidos") {
                if (concluidas.length) {
                    return (
                        <div className={style.titulo} onClick={showListaConcluida}>
                            <p>{props.titulo}({concluidas.length})</p>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    )
                }
            } else {
                return (
                    <div className={style.titulo}>
                        <p>{props.titulo}</p>
                    </div>
                )
            }
        }
    }

    function renderizarItemlLista() {

        if (props.mostrar === "concluidos") {
            if (concluidas.length) {
                return concluidas.map((tarefa, indice) => <ItemLista elemento={InputOrIcon(tarefa)} nomeItem={tarefa.nome} key={indice} className={style.subilhado} />)
            }
        } else {
            if (naoConcluidas.length) {
                return naoConcluidas.map((tarefa, indice) => <ItemLista elemento={InputOrIcon(tarefa)} nomeItem={tarefa.nome} key={indice} />)
            }
        }
    }

    return (
        <nav>
            <ul className={`${style.lista} ${props.mostrar == "concluidos" ? style.listaConcluidos : ''}`} id={`${props.mostrar == "concluidos" ? 'hiddenLista' : ''}`}>
                {renderizarTitutlo()}
                {renderizarItemlLista()}
            </ul>
        </nav>
    )
}