import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

import weekdays from "../weekdays";

import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'

export default function Today({userInfo}){
    const [todaysHabits, setTodaysHabits] = useState([])

    let day = dayjs().day()
    let dayName = weekdays[day]
    let dayDate = dayjs().format('DD/MM')
    
    console.log('oi')

    function checkUncheck(habit){
        console.log(habit.id)
        //check the habit
        if(!habit.done){
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`,{
                headers:{
                    Authorization: `Bearer ${userInfo.token}`
                }
            })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
        } 
        //uncheck the habit
        else{
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`,{
                headers:{
                    Authorization: `Bearer ${userInfo.token}`
                }
            })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',{
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        .then(res => {
            console.log('deu bom')
            console.log(res.data)
            // console.log(userInfo)
            setTodaysHabits(res.data)
        })
        .catch(err => console.log('deu ruim'))
    },[])
    

    return(
        <>
            <Header picture={userInfo.image}/>
            <Container>
                <div>
                    <h1>{dayName}, {dayDate}</h1>
                    <p>Nenhum hábito concluído ainda</p>
                </div>
                {todaysHabits.length > 0 && 
                    todaysHabits.map(habit => (
                        <Task key={habit.id}>
                            <div>
                                <h2>{habit.name}</h2>
                                <p>Sequência atual: {habit.currentSequence} dias</p>
                                <p>Seu recorde: {habit.highestSequence} dias</p>
                            </div>
                            <Checkbox 
                            onClick={() => checkUncheck(habit)}
                            isDone={habit.done}
                            >
                                <ion-icon name="checkmark-outline"></ion-icon>
                            </Checkbox>
                        </Task>
                    ))
                }
            </Container>
            <Footer/>
        </>
    )
}

const Container = styled.main`
    background-color: #E5E5E5;
    height: 100vh;
    padding: 100px 16px 0 16px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    >div{
        width: 340px;
        margin-bottom: 32px;
        >h1{
            text-align: left;
            font-size: 23px;
            color: #126BA5;
        }
        >p{
            text-align: left;
            font-size: 18px;
            color: #BABABA;
        }
    }
`
const Task = styled.div`
    padding: 0 8px ;
    width: 340px;
    height: 100px;
    border-radius: 6px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >div{
        >h2{
            font-size: 23px;
            color: #666666;
        }
        >p{
            font-size: 13px;
            color: #666666;
        }
    }
`
const Checkbox = styled.div`
    width: 69px;
    height: 69px;
    background-color: ${props => props.isDone ? ('#8FC549') : ('#EBEBEB')};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    >ion-icon{
        color: #FFFFFF;
        font-size: 56px;
    }
`
