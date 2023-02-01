import './scss/style.css'
import CaixaDeTexto from "./input"
import Botao from './button'

const Formulario = () => {

    const inputs = [
        {
            label: 'CardHolder',
            tipo: 'text',
            placeholder: 'insira o seu nome'
        },
        {
            label: 'Card Number',
            tipo: 'number',
            placeholder: 'insira o seu numero do cartão'
        },
        {
            label: 'EXP.DATE',
            tipo: 'date',
            placeholder: 'insira o data'
        },
        {
            label: '(MM/YY)',
            tipo: 'date',
            placeholder: 'insira o mês e ano'
        },
        {
            label: 'CVC',
            tipo: 'date',
            placeholder: 'insira o código avulso'
        },
    ]
    const botoes = [
        {
            Nome: 'Enviar',
            classe: 'Formulario__botao'
        },
        {
            Nome: 'Limpar',
            classe: 'Formulario__botao'
        }
    ]
    function resetForm(event){
        event.preventDefault()
    }
    return (
        <>
            <form onSubmit={resetForm} className='formulario' action="">
                {inputs.map((inputs =>
                    <CaixaDeTexto
                        label={inputs.label}
                        info={inputs.info}
                        placeholder={inputs.placeholder}
                    />))
                }
                {
                    botoes.map(botoes => <Botao
                        nome={botoes.Nome}
                        classe={botoes.classe}
                    />)
                }
            </form>
        </>
    )
}

export default Formulario