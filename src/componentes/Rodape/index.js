import styled from 'styled-components'
import {textos} from './dadosRodape'

const Footer = styled.footer`
    display: flex;
    text-align: center;
    margin: 20px 0 20px 0
`
const Conteudo = styled.div`
    text-align: center;
    display: inline-block;
    width: 20%;
    vertical-align: middle;
    text-align: center;
`

const P = styled.p`
    text-align: center;
    margin-bottom: 0;
    padding: 5px;
    margin-top: 0;
`
const H3 = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
`


function RodaPe() {
    return(     
        <Footer>
            <div>
                {textos.map( texto => ( 
                    <Conteudo>
                        <H3>{texto.tituloPe}</H3>
                        <P>{texto.textoPe}</P>
                    </Conteudo>
                ))}
            </div>
        </Footer>
    )
}

export default RodaPe 