import logo from '../../imagens/⊱ gojo _ vinz.jpg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
    margin-right: 10px;
`
const LogoImage = styled.img`
    margin-right: 10px;
    display: flex;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 10px;
`

function Logo() {
    return(
        <LogoContainer>
             <LogoImage src={logo} alt='logo'/>
            <p><strong>Frigs</strong> Mangás</p>
        </LogoContainer>
    )
}

export default Logo