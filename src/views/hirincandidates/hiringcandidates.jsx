import React,{useState} from 'react'
import { Col,Row,Button,Modal } from 'antd'
import user3 from "../../assets/user3.png"
import user4 from "../../assets/user4.png"
import user5 from "../../assets/user5.png"
export default function Hiringcandidates(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const candidates = [
    { name: "Alice Johnson", title: "Frontend Developer", hiredBy: "Hired by: Stella",image: user4 },
    { name: "Robert Williams", title: "Backend Developer", hiredBy: "Code review with Randy",image: user5 },
    { name: "Emily Carter", title: "UI/UX Designer", hiredBy: "Design discussion with Michael",image: user3 },
    { name: "Daniel Wilson", title: "Machine Learning Engineer", hiredBy: "Workshop with Stella",image: user3 },
    { name: "Sophia Martinez", title: "Scrum Master", hiredBy: "Sprint planning with Team Sarah",image: user4 },
    { name: "Liam Anderson", title: "Cybersecurity Analyst", hiredBy: "Security audit with David",image: user5},
    { name: "Chloe Thomas", title: "Cloud Architect", hiredBy: "Cloud migration meeting with John" ,image: user4},
    { name: "Ethan Harris", title: "QA Engineer", hiredBy: "Bug tracking session with Emily" ,image: user5}
  ];

    return (
        <>
         <Row>
             <Col span={24} className="h-4"></Col>
             <Col span={24} className="flex flex-row justify-between">
                 <h1 className='mt-1 text-xl font-medium tracking-wide'>Hiring Candidates</h1>
                 <span className='mt-2 inline-block border-b-2 border-[#0A66C2] text-[#0A66C2] cursor-pointer' onClick={()=>setIsModalOpen(!isModalOpen)}>View All</span>
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
         <Modal
        open={isModalOpen}
        footer={null}
        className="assessmentModal"
        width={"40%"}
        title={
          <>
            <h1 className="text-black dark:!text-white font-bold text-3xl">
              Hired Candidates
            </h1>
          </>
        }
        onCancel={() => setIsModalOpen(false)}
      >
        <div className="m-3">
          <Row>
            <Col span={24}>
                {candidates?.map((data,i) => {
                  return (
                    <div key={i}>
                    <Row className="m-2 text-black dark:!text-white">
                    <Col span={4}>
             <div className='h-14 w-14 rounded-full bg-white text-center'>
               <img src={data?.image}></img>
               </div>
             </Col>
             <Col span={14} className='ml-2'>
             <span className='text-md font-medium'>{data?.name}</span>
               <h1 className='font-light text-small mt-1'>{data?.title}</h1>
               <h1 className='text-small mt-1 font-light'>{data?.hiredBy}</h1>
             </Col>
             <Col span={3}>
               <Button className="text-[#0A66C2] text-sm rounded-sm border-[#0A66C2] dark:!border-gray-400">Details</Button>
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
