import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function ProgressBar({checkedHabitsNum, todaysHabitsNum}){
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        let p = (checkedHabitsNum / todaysHabitsNum)*100
        setPercentage(p)
    }, [checkedHabitsNum])
    
    return(
        <CircularProgressbar
            value={percentage}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
        })}
      />
    )
}