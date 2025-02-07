import React from 'react'
import { Col,Row,Button } from 'antd'
export default function Upcomings(props) {
    

    return (
        <>
         <Row>
             <Col span={24} className="h-6"></Col>
             <Col span={24} className="flex flex-row justify-between">
                 <h1 className='mt-1 text-xl font-medium tracking-wide'>Upcomings</h1>
                 <span className='mt-2 inline-block border-b-2 border-[#0A66C2] text-[#0A66C2]'>View All</span>
             </Col>
             <Col span={24} className="h-6"></Col>
             <Col span={6}>
               <div className='h-14 w-14 rounded-md bg-[#0B74AD26] text-center flex-col content-center'>
               <h1 className='text-md font-medium text-[#0B74AD]'>07</h1>
               <span className='text-[#0B74AD] text-md'>Feb</span>
               </div>
             </Col>
             <Col span={14} className='ml-2'>
               <h1 className='font-medium text-md'>Interview with designer</h1>
               <span className='text-md font-light'>Created by <span className="text-[#0B74AD]">Stella</span></span>
               <h1 className='text-small mt-1 font-light'>10 AM to 11 AM</h1>
             </Col>
             <Col span={3}>
               <Button className='ml-1' type='primary'>Details</Button>
             </Col>
             <Col span={24} className="h-6"></Col>
             <Col span={6}>
               <div className='h-14 w-14 rounded-md bg-[#C0C1C1] text-center flex-col content-center'>
               <h1 className='text-md font-medium text-black'>07</h1>
               <span className='text-black text-md'>Feb</span>
               </div>
             </Col>
             <Col span={14} className='ml-2'>
               <h1 className='font-medium text-md'>Interview with PMO</h1>
               <span className='text-md font-light'>Created by <span className="text-[#0B74AD]">Stephen</span></span>
               <h1 className='text-small mt-1 font-light'>10 AM to 11 AM</h1>
             </Col>
             <Col span={3}>
               <Button className='ml-1' type='primary'>Details</Button>
             </Col>
             <Col span={24} className="h-6"></Col>
             <Col span={6}>
               <div className='h-14 w-14 rounded-md bg-[#C0C1C1] text-center flex-col content-center'>
               <h1 className='text-md font-medium text-black'>07</h1>
               <span className='text-black text-md'>Feb</span>
               </div>
             </Col>
             <Col span={14} className='ml-2'>
               <h1 className='font-medium text-md'>Interview with Net. Admin</h1>
               <span className='text-md font-light'>Created by <span className="text-[#0B74AD]">Stella</span></span>
               <h1 className='text-small mt-1 font-light'>01 PM to 02 PM</h1>
             </Col>
             <Col span={3}>
               <Button className='ml-1' type='primary'>Details</Button>
             </Col>

         </Row>
        </>
    )
}
