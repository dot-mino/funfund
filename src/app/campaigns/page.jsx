import React from 'react';

export default function CampaignsPage() {
    
  return (
    <div className="flex h-full justify-center items-center bg-gray-100 p-6">
      <div className="flex flex-col p-6 border border-gray-300 rounded-md shadow-xl bg-white">
        <div className="flex justify-center mt-6">
          <span className="text-2xl text-center w-full text-gray-800">Test Message</span>
        </div>
        <div className="flex flex-col items-center gap-4 mt-4">
          <p className="text-gray-800">This is a test message to verify the campaigns page is working correctly.</p>
        </div>
      </div>
    </div>
  );
}
