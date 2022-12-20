import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header({picture}){
    return(
        <HeaderContainer data-test="header">
            <h1>
                TrackIt
            </h1>
                
            <img alt="" src={picture}></img>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
    >h1{
        font-family: 'Playball';
        font-size: 40px;
        color: #FFFFFF;
    }
    >img{
        width: 51px;
        height: 51px;
        border-radius: 100%;
    }
`
