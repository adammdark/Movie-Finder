import React from 'react'

const Loader = () => {
  return (
      <div className="flex justify-center items-center p-10 min-h-[90vh] bg-white dark:bg-gray-800">
      <div className="w-16 h-16 border-4 border-gray-700 bg-sky-400 rounded-lg flex items-center justify-center">
        <div
          className="w-12 h-3 bg-amber-50 rounded-sm"
          style={{ animation: "clap 0.8s infinite ease-in-out" }}
        ></div>
      </div>
    </div>
  )
}

export default Loader