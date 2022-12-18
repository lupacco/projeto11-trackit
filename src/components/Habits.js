import styled from "styled-components"
//Components
import Header from "./Header"
import Footer from "./Footer"
import WeekDays from "./WeekDays"

import { useState } from "react"


export default function Habits({userInfo}){
    const [creatingHabit, setCreatingHabit] = useState(false)
    const [habitsList, setHabitsList] = useState([])

    console.log(habitsList.length)

    return(
        <>
            <Header picture={userInfo.image}/>
            <HabitsContainer>
                <CreateHabit>
                    <p>Meus hábitos</p>
                    <button onClick={() => setCreatingHabit(true)}>
                        <ion-icon name="add-outline"></ion-icon>
                    </button>
                </CreateHabit>
                {creatingHabit && 
                    <CreatingHabit>
                        <input placeholder="nome do hábito"></input>
                        <WeekDays creatingHabit={creatingHabit}/>

                        <CancelSave>
                            <button onClick={() => setCreatingHabit(false)} className="cancel">Cancelar</button>
                            <button onClick={() => setCreatingHabit(false)} className="save">Salvar</button>
                        </CancelSave>
                    </CreatingHabit>
                }
                <CreatedHabit>
                    <ion-icon name="trash-outline"></ion-icon>
                    <p>Ler um capitulo de livro</p>
                    <WeekDays creatingHabit={false}/>
                </CreatedHabit>
                {habitsList.length === 0 && 
                    <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
                }
            </HabitsContainer>
            <Footer/>
        </>
    )
}

const HabitsContainer = styled.main`
    background-color: #E5E5E5;
    height: 100vh;
    padding: 100px 16px 0 16px ;

    >p{
        margin-top: 32px;
        font-size: 18px;
        color: #666666;
    }
`
const CreateHabit = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    >p{
        color: #126BA5;
        font-size: 24px;
    }
    >button{
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        color: #FFFFFF;
        border-radius: 6px;
        border-style: none;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const CreatingHabit = styled.div`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 6px;
    padding: 16px;
    >input{
        width: 303px;
        height: 45px;
        border: solid 1px #D4D4D4;
        border-radius: 6px;
        padding-left: 16px;
        font-size: 20px;
        &::placeholder{
            color: #DBDBDB;
        }
    }
`
const CancelSave = styled.div`
    display: flex;
    justify-content: right;
    >button{
        width: 84px;
        height: 35px;
        border-style: none;
        border-radius: 6px;
        margin-left: 4px;
        font-size: 16px;
    }
    >.cancel{
        background-color: #FFFFFF;
        color: #52B6FF;
    }
    >.save{
        background-color: #52B6FF;
        color: #FFFFFF;
    }
`
const CreatedHabit = styled.div`
    margin: 16px 0;
    width:340px;
    height:100px;
    background: #FFFFFF;
    border-radius: 6px;
    padding: 16px;
    position: relative;
    >p{
        font-size: 20px;
        margin-bottom: 0;
    }
    >ion-icon{
        position: absolute;
        top: 16px;
        right: 16px;
        color: #666666;
    }
`