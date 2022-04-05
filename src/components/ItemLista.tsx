import style from "../styles/ItemLista.module.css";

interface IProps {
    elemento: HTMLInputElement | any,
    nomeItem: string,
    className?: string
}

export default function ItemLista(props: IProps) {
    return (
        <li className={`
            ${style.itemLista}
            ${props.className}
        `}>
            {props.elemento} {props.nomeItem}
        </li>
    )
}