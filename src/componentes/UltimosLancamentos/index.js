import styled from 'styled-components'
import { mangas } from './dadosLancamentos'
import { Titulo } from '../titulo'

const Section = styled.section`
    background-color: black;
    color: white;
`
const Capas = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 5% 0 5%;
`
const ImgLancamento = styled.div`
    display: inline-block;
    background-color: #332F2E;
    border-radius: 15px;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 20px;
`
const P = styled.p`
    text-align: center;
`
const Img = styled.img`
    width: 200px;
    object-fit: cover;
    height: 280px;
    margin: 0 10px 10px 10px;
`

function UltimosLancamentos () {

    return(
                <Section>
                    <Titulo>Últimos Lançamentos</Titulo>
                    <Capas>
                        {mangas.map( manga => (
                            <ImgLancamento>
                                <P>{manga.nome}</P>
                                <Img src={manga.src}/>
                            </ImgLancamento>
                        ))}
                    </Capas>
                </Section>
    )
}

export default UltimosLancamentos
