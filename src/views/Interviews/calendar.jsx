import React from 'react'
import { Calendar} from 'antd'
export default function CalendarInfo(props) {
    

    return (
        <>
        <div className="rounded-none shadow-2xl">
             <Calendar fullscreen={false}  />
             </div>
        </>
    )
}
