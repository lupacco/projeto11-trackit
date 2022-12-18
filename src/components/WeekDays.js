import { useState } from "react"
import styled from "styled-components"

import Day from "./Day"

export default function WeekDays(){
    const [selectedDays, setSelectedDays] = useState([])
    const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']


    return(
        <WeekDaysContainer>
            {weekdays.map((day) => (
                <Day
                    key={day}
                    day={day}
                    isSelected={selectedDays.includes(day) ? (true) : (false)}
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                />
            ))}
        </WeekDaysContainer>
    )
}

const WeekDaysContainer = styled.div`
    display: flex;
    margin: 16px 0;
`
