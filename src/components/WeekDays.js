import { useState } from "react"
import styled from "styled-components"

import Day from "./Day"

export default function WeekDays({isDisabled, weekdays, selectedDays, setSelectedDays}){

    return(
        <WeekDaysContainer>
            {weekdays.map((day) => (
                <Day
                    isDisabled={isDisabled}
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
