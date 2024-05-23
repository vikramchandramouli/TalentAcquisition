import React from 'react'
import { Col,Row,Button } from 'antd'
import user3 from "../../assets/user3.png"
import user4 from "../../assets/user4.png"
import user5 from "../../assets/user5.png"
export default function Activity(props) {
    

    return (
        <>
         <Row>
             <Col span={24} className="h-6"></Col>
             <Col span={24} className="flex flex-row justify-between">
                 <h1 className='mt-1 text-xl font-medium tracking-wide'>Activity</h1>
                 <span className=' mt-2 inline-block border-b-2 border-[#0A66C2] text-[#0A66C2]'>View All</span>
             </Col>
             <Col span={24} className="h-6"></Col>
             <Col span={6}>
               <div className='h-14 w-14 rounded-full bg-white text-center'>
               <img src={user3}></img>
               </div>
             </Col>
             <Col span={13}>
             <span className='text-md font-medium'>John Doe <span className="text-small text-[#0B74AD]">[python Developer]</span></span>
               <h1 className='font-light text-small mt-1'>Interview with Stella</h1>
               <h1 className='text-small mt-1 font-light'>15 mins ago</h1>
             </Col>
             <Col span={24} className="h-6"></Col>
             <Col span={6}>
             <div className='h-14 w-14 rounded-full bg-white text-center'>
               <img src={user5}></img>
               </div>
             </Col>
             <Col span={13}>
             <span className='text-md font-medium'>John Doe <span className="text-small text-[#0B74AD]">[python Developer]</span></span>
               <h1 className='font-light text-small mt-1'>Interview with Stella</h1>
               <h1 className='text-small mt-1 font-light'>15 mins ago</h1>
             </Col>
             <Col span={24} className="h-6"></Col>
             <Col span={6}>
             <div className='h-14 w-14 rounded-full bg-white text-center pt-2'>
               <img src={user4}></img>
               </div>
             </Col>
             <Col span={13}>
             <span className='text-md font-medium'>John Doe <span className="text-small text-[#0B74AD]">[python Developer]</span></span>
               <h1 className='font-light text-small mt-1'>Interview with Stella</h1>
               <h1 className='text-small mt-1 font-light'>15 mins ago</h1>
             </Col>
         </Row>
        </>
    )
}
