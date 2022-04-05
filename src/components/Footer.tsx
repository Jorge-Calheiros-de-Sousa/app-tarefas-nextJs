import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faBars, faEllipsisVertical, faXmark } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/Footer.module.css";
import Input from "./Input";
import Tarefa from "../core/Tarefas";
import NavLink from "./NavLink";
import Link from "next/link";
import { useState } from "react";

interface IConfigsHeaders {
    tarefas: Tarefa[],
    tarefaAtual: Tarefa
    click: any
}


interface IProps {
    configs: IConfigsHeaders
}

export default function Footer(props: IProps) {
    const [novaTarefa, setNovaTarefa] = useState()

    function salvarTarefa() {
        console.log(novaTarefa);
    }

    function excluirLista() {
        console.log("excluir");
    }

    function showMenu() {
        const menu = document.getElementById("menu");
        if (menu?.classList.contains(style.showMenu)) {
            menu?.classList.remove(style.showMenu);
        } else {
            menu?.classList.add(style.showMenu);
        }
    }

    function showOptions() {
        const options = document.getElementById("options");
        if (options?.classList.contains(style.showMenu)) {
            options?.classList.remove(style.showMenu);
        } else {
            options?.classList.add(style.showMenu);
        }
    }

    function showTarefa() {
        const tarefa = document.getElementById("tarefa");
        if (tarefa?.classList.contains(style.showMenu)) {
            tarefa?.classList.remove(style.showMenu);
        } else {
            tarefa?.classList.add(style.showMenu);
        }
    }

    function renderizarLista() {
        return props.configs.tarefas.map(tarefa => {
            return <li key={tarefa.getId} tarefa-id={tarefa.getId} onClick={(e) => {
                props.configs.click(e);
                showMenu();
            }}>{tarefa.getNome}</li>
        })
    }

    return (
        <footer className={style.footer}>
            <div className={style.buttonsFooter}>
                <FontAwesomeIcon icon={faBars} onClick={showMenu} />
                <div className={style.contentIconPlus}>
                    <div className={style.iconPlus}>
                        <FontAwesomeIcon icon={faPlus} onClick={showTarefa} />
                    </div>
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} onClick={showOptions} />
            </div>
            <div className={style.adicionarLista} id="menu">
                <button type="button" className={style.fecharNovaLista} onClick={showMenu}>
                    <p><FontAwesomeIcon icon={faXmark} style={{ paddingRight: "10px" }} />Fechar</p>
                </button>
                <hr />
                <nav>
                    <ul>
                        {renderizarLista()}
                    </ul>
                </nav>
                <hr />
                <NavLink endereco="/create/formulario" titulo="Criar nova lista" className={style.criarNovaLista} />
            </div>
            <div className={style.adicionarLista} id="options">
                <button type="button" className={style.fecharNovaLista} onClick={showOptions}>
                    <p><FontAwesomeIcon icon={faXmark} style={{ paddingRight: "10px" }} />Fechar</p>
                </button>
                <hr />
                <div className={style.ordens}>
                    <Link href={`/update/formulario/${props.configs.tarefaAtual.getId}`}>
                        <p>Renomear lista</p>
                    </Link>
                    <br />
                    <p onClick={excluirLista}>Excluir lista</p>
                </div>
            </div>
            <div className={style.adicionarLista} id="tarefa">
                <button type="button" className={style.fecharNovaLista} onClick={showTarefa}>
                    <p><FontAwesomeIcon icon={faXmark} style={{ paddingRight: "10px" }} />Fechar</p>
                </button>
                <hr />
                <Input name="tarefa" type="text" placeholder="Nova tarefa" className={style.input} onChange={setNovaTarefa} />
                <button className={style.criarNovaLista} style={{ textAlign: "right" }} onClick={salvarTarefa}>
                    Salvar
                </button>
            </div>
        </footer>
    )
}