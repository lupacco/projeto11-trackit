import styled from "styled-components"
import logoTrackIt from "../assets/trackitlogo.png"
import {Link} from "react-router-dom"


export default function Login(){
    return(
        <LoginScreenContainer>
            <img alt="" src={logoTrackIt}></img>
            <h1>TrackIt</h1>

            <form>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <button type="submit">Entrar</button>
            </form>
            <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </LoginScreenContainer>
    )
}

const LoginScreenContainer = styled.div`
    padding: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    >img{
        width: 180px;
    }
    >h1{
        font-family: 'Playball';
        font-size: 69px;
        color: #126BA5;
    }
    >form{
        >input{
            display: block;
            width: 303px;
            height: 45px;
            margin: 8px 0;
            border-radius: 6px;
            border: solid 1px #D4D4D4;
            font-size: 20px;
            padding-left: 16px;
            &::placeholder{
                color: #DBDBDB;

            }

        }
        >button{
            display: block;
            width: 303px;
            height: 45px;
            text-align: center;
            margin-bottom: 32px;
            background-color: #52B6FF;
            color: #FFFFFF;
            border-style: none;
            border-radius: 6px;
        }
    }
`

const StyledLink = styled(Link)`
    margin: 0 auto;
    font-size: 14px;
    text-decoration: none;
    color: #52B6FF;
`