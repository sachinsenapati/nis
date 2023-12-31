import React from 'react'
import Profile from './Profile'
import Notice from './Notice'

const NoticeCard = () => {
  return (
    <div className="flex flex-col bg-gray-100 mb-2 p-2">
      <Profile />
      <Notice />
    </div>
  );
}

export default NoticeCard
