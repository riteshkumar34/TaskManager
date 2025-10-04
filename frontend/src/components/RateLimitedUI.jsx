import { ZapIcon } from "lucide-react";
 import React from 'react'
 
 const RateLimitedUI = () => {
   return (
     <div>
       <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <div className="flex justify-center mb-4">
          <ZapIcon className="w-16 h-16 text-yellow-400 animate-pulse" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Too Many Requests!</h1>
        <p className="text-gray-600 mb-6">
          You have reached the limit for this action. Please wait a few moments and try again.
        </p>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
     </div>
   )
 };
 
 export default RateLimitedUI;
 