import { useState } from "react"
import styled from "styled-components"

export default function Day({isDisabled, day, isSelected, selectedDays, setSelectedDays}){
    const [selected, setSelected] = useState(isSelected)

    return(
        <DayContainer
            disabled={isDisabled} 
            onClick={() => {
                setSelected(!selected)
                let newState = []
                //In case we want to remove the selected day
                if(selectedDays.includes(day)){
                    // console.log('remoção')
                    newState = selectedDays
                    let i = selectedDays.indexOf(day)
                    newState.splice(i,1)
                }
                //In case we want to add the selected day
                else{
                    // console.log('adição')
                    newState = [...selectedDays, day]
                }
                setSelectedDays([...newState])
            }} 
            isSelected={selected}>
            {day[0]}
        </DayContainer>
    )
}

const DayContainer = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => props.isSelected ? '#CFCFCF' : '#FFFFFF'};
    border: solid 1px ${props => props.isSelected ? '#CFCFCF' : '#D4D4D4'};
    color: ${props => props.isSelected ? '#FFFFFF' : '#DBDBDB'};
    border-radius: 6px;
    margin-right: 4px;
    font-size: 20px;
`