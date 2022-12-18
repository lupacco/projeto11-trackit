import styled from "styled-components"
import logoTrackIt from "../assets/trackitlogo.png"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import { useState } from "react"


export default function Login({setUserInfo}){
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')

    function login(event){
        event.preventDefault()
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email: email,
            password: password
        })
        .then(res => {
            console.log(res.data)
            setUserInfo(res.data)
            setEmail('')
            setPassword('')
            alert('Login realizado com sucesso!')
            navigate('/habitos')
        })
        .catch(err => {
            console.log(err)
            alert('Email ou senha inválidos')
        })
    }

    function logs(event){
        event.preventDefault()
        console.log(email)
        console.log(password)
    }

    return(
        <LoginScreenContainer>
            <img alt="" src={logoTrackIt}></img>
            <h1>TrackIt</h1>

            <form onSubmit={login}>
                <input required value={email} onChange={e => setEmail(e.target.value)} placeholder="email"></input>
                <input required value={password} onChange={e => setPassword(e.target.value)} placeholder="senha"></input>
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