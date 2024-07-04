import { GenerateIcon, InsertIcon, RegenerateIcon } from "assets/icons"
import React, { useState, type FC } from "react"

interface ModalProps {
  isModalOpen: boolean
  handleModalClose: () => void
}

const Modal: FC<ModalProps> = ({ isModalOpen, handleModalClose }) => {
  const [userPrompt, setUserPrompt] = useState<string>("")
  const [isGenerated, setIsGenerated] = useState<boolean>(false)

  const handleGenerate = () => {
    setIsGenerated(true)
  }

  return (
    <div
      onClick={handleModalClose}
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center  ">
      {/* modal  */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-lg w-full flex flex-col justify-end z-50 items-end gap-4">
        {/* user prompt */}
        <div className=" flex justify-end ">
          <p className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 text-lg w-2/3 font-normal ">
            Thank you for the opportunity! If you have any more questions{" "}
          </p>
        </div>
        {/* Response  */}
        <div className="  flex justify-start ">
          <p className="px-4 py-2 bg-blue-300 rounded-md text-gray-700 text-lg w-3/4 font-normal">
            Thank you for the opportunity! If you have any more questions or if
            there's anything else I can help you with, feel free to ask.
          </p>
        </div>
        {/* user input  */}
        <input
          className="w-full text-lg font-medium border border-gray-600 focus:outline-none  focus:border-gray-700 px-4 py-4 rounded-md"
          placeholder="Your prompt"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}></input>
        {isGenerated ? (
          <div className="flex justify-end items-center gap-4">
            <button className="bg-transparent border border-gray-700  px-1 py-2 rounded w-fit text-lg font-semibold flex flex-row items-center justify-center gap-1">
              <InsertIcon className="w-6 h-6 text-black" />
              Insert
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-fit text-lg font-semibold flex flex-row items-center justify-center gap-1">
              <RegenerateIcon className="w-6 h-6 text-white" />
              Regenerate
            </button>
          </div>
        ) : (
          <button
            onClick={handleGenerate}
            className="bg-blue-500 text-white px-4 py-2 rounded w-fit text-lg font-semibold flex flex-row items-center justify-center gap-1">
            <GenerateIcon className="w-6 h-6" />
            <span>Generate</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default Modal
