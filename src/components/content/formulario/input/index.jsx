import './scss/style.css'

export default function CaixaDeTexto(props) {
    return (
        <>
            <div className='input'>
                <label>{props.label}</label>
                <input placeholder={props.placeholder} type="text" />
            </div>
        </>
    )
}