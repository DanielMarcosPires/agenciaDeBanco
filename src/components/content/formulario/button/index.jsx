import './scss/style.css'

export default function Botao(props){
    return(
        <>
            <button className={props.classe}>{props.nome}</button>
        </>
    )
}