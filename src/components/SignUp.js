import styled from "styled-components"
import logoTrackIt from "../assets/trackitlogo.png"
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react"
import axios from "axios"

//https://pbs.twimg.com/media/EWkT3JmXQAY6onx.png
export default function Login(){
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')

    function signUp(event){
        event.preventDefault()
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email: email,
            name: name,
            image: picture,
            password: password
        })
        .then(res => {
            setEmail('')
            setPassword('')
            setName('')
            setPicture('')
            alert('Cadastro realizado com sucesso!')
            navigate('/login')
        })
        .catch(err => alert(err))
    }


    return(
        <LoginScreenContainer>
            <img alt="" src={logoTrackIt}></img>
            <h1>TrackIt</h1>

            <form onSubmit={signUp}>
                <input data-test="email-input" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="email"></input>
                <input data-test="password-input" type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="senha"></input>
                <input data-test="user-name-input" required value={name} onChange={e => setName(e.target.value)} placeholder="nome"></input>
                <input data-test="user-image-input" required value={picture} onChange={e => setPicture(e.target.value)} placeholder="foto"></input>
                <button data-test="signup-btn" type="submit">Cadastrar</button>
            </form>
            <StyledLink data-test="login-link" to="/">Já tem uma conta? Faça login!</StyledLink>
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