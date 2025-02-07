import React from 'react'
import { Calendar} from 'antd'
export default function CalendarInfo(props) {
    

    return (
        <>
        <div className="rounded-sm shadow-2xl w-auto">
             <Calendar fullscreen={false} />
             </div>
        </>
    )
}
