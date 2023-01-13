import Navbar from "../../components/Navbar/Navbar";
import Communities from "../../components/Community/communities";
import {Modal,Input , Button, Upload } from 'antd'
import { useState } from "react";
import { UploadOutlined } from '@ant-design/icons';
import YourCommunities from "../../components/Community/yourcommunities";
function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [communityName,setCommunityName] = useState('');
  const [description,setDescription] = useState('');
  const [file,setFile] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setCommunityName('')
    setDescription('')
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setCommunityName('')
    setDescription('')
    setIsModalOpen(false);
  };
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <Navbar />
      <Modal destroyOnClose={true} title="Create a Community" className="font-semibold" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

        <h5 className="mt-8 font-medium font-['Poppins']">Community Name:</h5>
        <Input onChange={(e)=>setCommunityName(e.target.value)} value={communityName} placeholder="Enter Name"  className="font-['Poppins'] mb-2 font-normal"/>
        <h5 className="mt-2 font-normal font-['Poppins']">Description:</h5>
        <Input onChange={(e)=>setDescription(e.target.value)} value={description} placeholder="Enter Description" className="font-['Poppins'] mb-2 font-normal" />
        <Upload {...props}>
        <h5 className="mt-2 font-medium font-['Poppins']">Community Logo:</h5>
          <Button className="my-2 font-normal font-['Poppins']" icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Modal>
      <div className="flex flex-col justify-center items-center">
        <div className="min-[400px]:w-[65%] md:w-[75%] lg:w-[80%] h-fit rounded-[15px] font-['Poppins'] overflow-hidden shadow-[0px_4px_5px_rgba(0,0,0,0.25)] mx-[36px] my-[16px]">
          <div className="px-5 py-4 my-[10px] ">
            <div className="font-[700] text-[32px] mx-[22px] mt-[5px] ">
              Welcome to Communities
            </div>
            <div className="h-fit text-[20px] text-[#777777] mx-[22px]">
              Follow communities and explore your interests!
            </div>
            <div className=" flex flex-1 items-end justify-between">
              <button onClick={showModal} className="inline-block bg-[#02C8AC] h-[45px] w-[150px] rounded-[5px] px-3 py-1 text-[20px] font-medium bottom-[0px] text-[#FFFFFF] mt-[10px] ml-[22px] ">
                Create
              </button>
            </div>
          </div>
        </div>
        <Communities />
        <YourCommunities />
      </div>
    </>
  );
}

export default Community;
