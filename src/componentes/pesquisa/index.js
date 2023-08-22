import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { mangas } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background: rgb(34,0,29);
    background: linear-gradient(90deg, rgba(34,0,29,1) 0%, rgba(121,9,113,1)25%, 
    rgba(167,11,143,1) 50%, rgba(231,15,219,1) 75%, rgba(240,9,227,1) 100%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
    min-height: 80vh;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: left;
    flex-flow: row;
    flex-wrap: wrap;
    margin: 0 1% 0 1%;
`
const ResultadoImagem = styled.div`
    background-color: #75005B;
    border-radius: 15px;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 10px;
    width: 250px;
    display: inline-block;
    font-weight: bold;
`
const Img = styled.img`
    width: 200px;
    margin-bottom: 15px;
    object-fit: cover;
    height: 75%;
`


function Pesquisa() {
    const [mangasPesquisados, setMangasPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Bem vindo!</Titulo>
            <SubTitulo>Encontre seu mangá em nossa estante.</SubTitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = mangas.filter( manga => manga.nome.includes(textoDigitado))
                    setMangasPesquisados(resultadoPesquisa)
                }}
            />
            <Resultado>
                { mangasPesquisados.map( manga => (
                    <ResultadoImagem>
                        <p>{manga.nome}</p>
                        <Img src={manga.src}/>
                    </ResultadoImagem>
                    ) ) }
            </Resultado>
        </PesquisaContainer>
    )
}

export default Pesquisa