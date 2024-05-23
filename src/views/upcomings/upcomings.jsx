import React from 'react'
import { Col,Row,Button } from 'antd'
export default function Upcomings(props) {
    

    return (
        <>
         <Row>
             <Col span={24} className="h-6"></Col>
             <Col span={24} className="flex flex-row justify-between">
                 <h1 className='mt-1 text-xl font-medium tracking-wide'>Upcomings</h1>
                 <span className=' mt-2 inline-block border-b-2 border-[#0A66C2] text-[#0A66C2]'>View All</span>
             </Col>
             <Col span={24} className="h-6"></Col>
             <Col span={6}>
               <div className='h-14 w-14 rounded-md bg-[#0B74AD26] text-center pt-2'>
               <h1 className='text-lg font-medium text-[#0B74AD]'>07</h1>
               <span className='text-[#0B74AD] text-lg'>Feb</span>
               </div>
             </Col>
             <Col span={13}>
               <h1 className='font-medium text-md'>Interview with designer</h1>
               <span className='text-md font-light'>Created by <span className="text-[#0B74AD]">Stella</span></span>
               <h1 className='text-small mt-1 font-light'>10 A.M to 11 A.M</h1>
             </Col>
             <Col span={5}>
               <Button className='ml-1' type='primary'>Details</Button>
             </Col>
             <Col span={24} className="h-6"></Col>
             <Col span={6}>
               <div className='h-14 w-14 rounded-md bg-[#C0C1C1] text-center pt-2'>
               <h1 className='text-lg font-medium text-black'>07</h1>
               <span className='text-black text-lg'>Feb</span>
               </div>
             </Col>
             <Col span={13}>
               <h1 className='font-medium text-md'>Interview with PMO</h1>
               <span className='text-md font-light'>Created by <span className="text-[#0B74AD]">Stephen</span></span>
               <h1 className='text-small mt-1 font-light'>10 A.M to 11 A.M</h1>
             </Col>
             <Col span={5}>
               <Button className='ml-1' type='primary'>Details</Button>
             </Col>
             <Col span={24} className="h-6"></Col>
             <Col span={6}>
               <div className='h-14 w-14 rounded-md bg-[#C0C1C1] text-center pt-2'>
               <h1 className='text-lg font-medium text-black'>07</h1>
               <span className='text-black text-lg'>Feb</span>
               </div>
             </Col>
             <Col span={13}>
               <h1 className='font-medium text-md'>Interview with Net. Admin</h1>
               <span className='text-md font-light'>Created by <span className="text-[#0B74AD]">Stella</span></span>
               <h1 className='text-small mt-1 font-light'>10 A.M to 11 A.M</h1>
             </Col>
             <Col span={5}>
               <Button className='ml-1' type='primary'>Details</Button>
             </Col>

         </Row>
        </>
    )
}
