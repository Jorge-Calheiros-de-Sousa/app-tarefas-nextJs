interface IProps {
    name: string
    type?: string
    className: string
    placeholder: string
    onChange: any
    value?: any
}

export default function Input(props: IProps) {
    return (
        <input name={props.name} type={props.type} className={props.className} placeholder={props.placeholder} onChange={(e) => { props.onChange(e.target.value) }} value={props.value} />
    )
}