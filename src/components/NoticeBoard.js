import React from 'react'
import NoticeCard from "./NoticeCard";

const NoticeBoard = () => {
  return (
    <div className='bg-white p-2'>
        <p className='text-gray-500 text-xl font-bold'>Notice Board</p>
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
    </div>
  );
}

export default NoticeBoard
