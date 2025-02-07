import React from 'react'
import { Col,Row,Button } from 'antd'
import user3 from "../../assets/user3.png"
import user4 from "../../assets/user4.png"
import user5 from "../../assets/user5.png"
export default function Hiringcandidates(props) {
    

    return (
        <>
         <Row>
             <Col span={24} className="h-4"></Col>
             <Col span={24} className="flex flex-row justify-between">
                 <h1 className='mt-1 text-xl font-medium tracking-wide'>Hiring Candidates</h1>
                 <span className='mt-2 inline-block border-b-2 border-[#0A66C2] text-[#0A66C2]'>View All</span>
             </Col>
             <Col span={24} className="h-4"></Col>
             <Col span={6}>
               <div className='h-14 w-14 rounded-full bg-white text-center'>
               <img src={user3}></img>
               </div>
             </Col>
             <Col span={14} className='ml-2'>
             <span className='text-md font-medium'>John Doe</span>
               <h1 className='font-light text-small mt-1'>Senior Python Developer</h1>
               <h1 className='text-small mt-1 font-light'>Hired by: Stella</h1>
             </Col>
             <Col span={3}>
               <Button className="text-[#0A66C2] text-sm rounded-sm border-[#0A66C2]">Details</Button>
             </Col>
             <Col span={24} className="h-4"></Col>
             <Col span={6}>
             <div className='h-14 w-14 rounded-full bg-white text-center'>
               <img src={user5}></img>
               </div>
             </Col>
             <Col span={14} className='ml-2'>
             <span className='text-md font-medium'>John Doe</span>
               <h1 className='font-light text-small mt-1'>Senior Python Developer</h1>
               <h1 className='text-small mt-1 font-light'>Hired by: Stella</h1>
             </Col>
             <Col span={3}>
               <Button className="text-[#0A66C2] text-sm rounded-sm border-[#0A66C2]">Details</Button>
             </Col>
             <Col span={24} className="h-4"></Col>
             <Col span={6}>
             <div className='h-14 w-14 rounded-full bg-white text-center pt-2'>
               <img src={user4}></img>
               </div>
             </Col>
             <Col span={14} className='ml-2'>
             <span className='text-md font-medium'>John Doe</span>
               <h1 className='font-light text-small mt-1'>Senior Python Developer</h1>
               <h1 className='text-small mt-1 font-light'>Hired by: Stella</h1>
             </Col>
             <Col span={3}>
               <Button className="text-[#0A66C2] text-sm rounded-sm border-[#0A66C2]">Details</Button>
             </Col>
             <Col span={24} className="h-4"></Col>
             <Col span={6}>
             <div className='h-14 w-14 rounded-full bg-white text-center'>
               <img src={user5}></img>
               </div>
             </Col>
             <Col span={14} className='ml-2'>
             <span className='text-md font-medium'>John Doe</span>
               <h1 className='font-light text-small mt-1'>Senior Python Developer</h1>
               <h1 className='text-small mt-1 font-light'>Hired by: Stella</h1>
             </Col>
             <Col span={3}>
               <Button className="text-[#0A66C2] text-sm rounded-sm border-[#0A66C2]">Details</Button>
             </Col>
             <Col span={24} className="h-4"></Col>
             <Col span={6}>
             <div className='h-14 w-14 rounded-full bg-white text-center'>
               <img src={user5}></img>
               </div>
             </Col>
             <Col span={14} className='ml-2'>
             <span className='text-md font-medium'>John Doe</span>
               <h1 className='font-light text-small mt-1'>Senior Python Developer</h1>
               <h1 className='text-small mt-1 font-light'>Hired by: Stella</h1>
             </Col>
             <Col span={3}>
               <Button className="text-[#0A66C2] text-sm rounded-sm border-[#0A66C2]">Details</Button>
             </Col>

         </Row>
        </>
    )
}
