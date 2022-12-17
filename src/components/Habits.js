import styled from "styled-components"
//Components
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"

export default function Habits(){
    const [creatingHabit, setCreatingHabit] = useState(false)
    const [selectedDays, setSelectedDays] = useState([])

    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    function selectDay(event, index){
        let newSelectedDays = []
        console.log('selected')
        console.log(selectedDays)
        if(!selectedDays.includes(index)){
            newSelectedDays = [...selectedDays, index]
            setSelectedDays(newSelectedDays)
        } else{
            console.log('ta incluso')
            let i = selectedDays.indexOf(index)
            newSelectedDays = selectedDays.splice(i, 1)
            console.log('new')
            console.log(newSelectedDays)
            setSelectedDays(newSelectedDays)
        }
    }

    return(
        <>
            <Header/>
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
                        <WeekDays>
                            {weekdays.map((day, index) => (
                                <Day isSelected={selectedDays.includes(index) ? (true) : (false)} key={index} onClick={e => selectDay(e,index)}>{day}</Day>
                            ))}
                        </WeekDays>
                        <CancelSave>
                            <button className="cancel">Cancelar</button>
                            <button className="save">Salvar</button>
                        </CancelSave>
                    </CreatingHabit>
                }

                <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
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
const WeekDays = styled.div`
    display: flex;
    margin: 16px 0;
`
const Day = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => props.isSelected ? '#CFCFCF' : '#FFFFFF'};
    border: solid 1px ${props => props.isSelected ? '#CFCFCF' : '#D4D4D4'};
    color: ${props => props.isSelected ? '#FFFFFF' : '#DBDBDB'};
    border-radius: 6px;
    margin-right: 4px;
    font-size: 20px;
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