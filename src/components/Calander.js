import React, { useState } from 'react'
import Calander from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const DatePicker = () => {
    const [date, setDate] = useState(new Date())

    const onChange = date => {
        setDate(date)
    }
    return (
        <div className='calander'>
            <div>
            <h2>Pick a Day or Days you are free</h2>
                <Calander onChange={onChange} value={date} />
                {console.log(date)}
            </div>
        </div>
    )
}

export default DatePicker
