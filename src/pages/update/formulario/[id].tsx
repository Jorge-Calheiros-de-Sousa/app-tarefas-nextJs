import Input from "../../../components/Input";
import LayoutFormulario from "../../../components/LayoutFormulario";
import style from "../../../styles/Formulario.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Formulario() {
    const router = useRouter();
    const [nomeMudado, setNomeMudado] = useState()

    function renomearLista() {
        console.log(nomeMudado);
    }

    return (
        <LayoutFormulario titulo="Renomear lista" concluir={renomearLista}>
            <div className={style.container}>
                <Input name="lista" placeholder="Digite o título da lista" type="text" className={style.formularioInput} onChange={setNomeMudado} />
            </div>
        </LayoutFormulario>
    )
}