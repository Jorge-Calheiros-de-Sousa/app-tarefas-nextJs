import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface IProps {
    endereco: string
    titulo: any
    className: string
}

export default function NavLink(props: IProps) {
    return (
        <Link href={props.endereco}>
            <button type="button" className={props.className}>
                <FontAwesomeIcon icon={faAdd} style={{ marginRight: "10px" }} />{props.titulo}
            </button>
        </Link>
    )
}