import styled from "styled-components"
import {Link} from "react-router-dom"
import ProgressBar from "./ProgressBar"
import { useEffect, useState } from "react"

export default function Footer({checkedHabitsNum, todaysHabitsNum, percentage, setPercentage}){
    
    useEffect(() => {
        let p = (checkedHabitsNum / todaysHabitsNum)*100
        setPercentage(p)
    }, [checkedHabitsNum, todaysHabitsNum])

    return(
        <FooterContainer data-test="menu">
            <StyledLink data-test="habit-link" to="/habitos">Hábitos</StyledLink>
            <div>
                <StyledLink data-test="today-link" to="/hoje">
                    <ProgressBar
                        percentage={percentage}
                    />
                </StyledLink>
            </div>
            <StyledLink data-test="history" to="/historico">Histórico</StyledLink>
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
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #52B6FF;
    font-size: 18px;
    >p{
            color: #FFFFFF;
    }

`