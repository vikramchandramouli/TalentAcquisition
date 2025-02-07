import React,{useState} from 'react'
import { Col,Row,Button,Modal } from 'antd'
import user3 from "../../assets/user3.png"
import user4 from "../../assets/user4.png"
import user5 from "../../assets/user5.png"
export default function Activity(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const activity = [
    { name: "John Doe", title: "Python Developer", desc: "Interview with Stella", time: "15 mins ago",image:user3 },
    { name: "John Smith", title: "Angular Developer", desc: "Interview with Stella", time: "15 mins ago",image:user4},
    { name: "Johnson Smith", title: "Designer", desc: "Interview with Randy", time: "15 mins ago",image:user5},
    { name: "Emma Wilson", title: "React Developer", desc: "Interview with Michael", time: "30 mins ago",image:user3  },
    { name: "David Brown", title: "Data Analyst", desc: "Interview with Sarah", time: "45 mins ago",image:user4 },
    { name: "Sophia Lee", title: "Product Manager", desc: "Interview with John", time: "1 hour ago",image:user5 },
    { name: "Chris Evans", title: "Full Stack Developer", desc: "Interview with Emily", time: "2 hours ago" ,image:user3 },
    { name: "Olivia Martin", title: "DevOps Engineer", desc: "Interview with James", time: "3 hours ago",image:user4 }
  ];
  

    return (
        <>
         <Row>
             <Col span={24} className="h-6"></Col>
             <Col span={24} className="flex flex-row justify-between">
                 <h1 className='mt-1 text-xl font-medium tracking-wide'>Activity</h1>
                 <span className='mt-2 inline-block border-b-2 border-[#0A66C2] text-[#0A66C2] cursor-pointer' onClick={()=>setIsModalOpen(!isModalOpen)}>View All</span>
             </Col>
             <Col span={24} className="h-6"></Col>
             <Col span={6}>
               <div className='h-14 w-14 rounded-full bg-white text-center'>
               <img src={user3}></img>
               </div>
             </Col>
             <Col span={14} className='ml-2'>
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
             <Col span={14} className='ml-2'>
             <span className='text-md font-medium'>John Smith <span className="text-small text-[#0B74AD]">[Angular Developer]</span></span>
               <h1 className='font-light text-small mt-1'>Interview with Stella</h1>
               <h1 className='text-small mt-1 font-light'>15 mins ago</h1>
             </Col>
             <Col span={24} className="h-6"></Col>
             <Col span={6}>
             <div className='h-14 w-14 rounded-full bg-white text-center'>
               <img src={user4}></img>
               </div>
             </Col>
             <Col span={14} className='ml-2'>
             <span className='text-md font-medium'>Johnson Smith <span className="text-small text-[#0B74AD]">[Designer]</span></span>
               <h1 className='font-light text-small mt-1'>Interview with Randy</h1>
               <h1 className='text-small mt-1 font-light'>15 mins ago</h1>
             </Col>
         </Row>
         <Modal
        open={isModalOpen}
        footer={null}
        className="assessmentModal"
        width={"35%"}
        title={
          <>
            <h1 className="text-black dark:!text-white font-bold text-3xl">
              Activity
            </h1>
          </>
        }
        onCancel={() => setIsModalOpen(false)}
      >
        <div className="m-5">
          <Row>
            <Col span={24}>
                {activity?.map((data,i) => {
                  return (
                    <div key={i}>
                    <Row className="m-2 text-black dark:!text-white">
                    <Col span={6}>
               <div className='h-14 w-14 rounded-full bg-white text-center'>
               <img src={data?.image}></img>
               </div>
             </Col>
             <Col span={14} className='ml-2'>
             <span className='text-md font-medium'>{data?.name} <span className="text-small text-[#0B74AD]">[{data?.title}]</span></span>
               <h1 className='font-light text-small mt-1'>{data?.desc}</h1>
               <h1 className='text-small mt-1 font-light'>{data?.time}</h1>
             </Col>
                      </Row>
                    </div>
                  );
                })}
            </Col>
          </Row>
        </div>
      </Modal>
        </>
    )
}
