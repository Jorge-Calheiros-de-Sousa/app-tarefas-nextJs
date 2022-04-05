import { useState } from "react";
import Input from "../../components/Input";
import LayoutFormulario from "../../components/LayoutFormulario";
import style from "../../styles/Formulario.module.css";

export default function Formulario() {
    const [nome, setNome] = useState()

    function criarNovaLista() {
        console.log(nome);
    }

    return (
        <LayoutFormulario titulo="Criar nova lista" concluir={criarNovaLista}>
            <div className={style.container}>
                <Input name="lista" placeholder="Digite o título da lista" type="text" className={style.formularioInput} onChange={setNome} />
            </div>
        </LayoutFormulario>
    )
}