import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader/'
import IconesHeader from '../iconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`

function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header