import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/LayoutFormulario.module.css";
import Link from "next/link";

interface IProps {
    titulo: string
    children: any
    concluir: any
}

export default function LayoutFormulario(props: IProps) {
    return (
        <div className={style.formulario}>
            <header className={style.header}>
                <div className={style.titulo}>
                    <Link href={"/"} >
                        <FontAwesomeIcon icon={faXmark} color={"gray"} />
                    </Link>
                    <p>{props.titulo}</p>
                </div>
                <div className={style.ok} onClick={props.concluir}>
                    Ok
                </div>
            </header >
            <main>
                {props.children}
            </main>
        </div >
    )
}