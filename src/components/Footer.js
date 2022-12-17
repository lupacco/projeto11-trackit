import styled from "styled-components"
import {Link} from "react-router-dom"

export default function Footer(){
    return(
        <FooterContainer>
            <StyledLink>Hábitos</StyledLink>
            <div>
                <p>Hoje</p>
            </div>
            <StyledLink>Histórico</StyledLink>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    >div{
        position: absolute;
        bottom: 2vh;
        left: 40vw;
        width: 91px;
        height: 91px;
        background-color: #52B6FF;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        >p{
            color: #FFFFFF;
        }
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #52B6FF;
    font-size: 18px;

`