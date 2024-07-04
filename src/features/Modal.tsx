import { GenerateIcon, InsertIcon, RegenerateIcon } from "assets/icons"
import React, { useState, type ChangeEvent, type FC } from "react"

const DUMMY_RESPONSE =
  "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."

interface ModalProps {
  isModalOpen: boolean
  handleModalClose: () => void
}

const Modal: FC<ModalProps> = ({ isModalOpen, handleModalClose }) => {
  const [userPrompt, setUserPrompt] = useState<string>("")
  const [promptVal, setPromptVal] = useState<string>("")
  const [promptError, setPromptError] = useState<string>("")
  const [response, setResponse] = useState<string>("")
  const [isGenerated, setIsGenerated] = useState<boolean>(false)

  const handleGenerate = () => {
    //propmt should not be empty
    if (promptVal === "") {
      setPromptError("Please Type Something!")
      return
    }

    setUserPrompt(promptVal)

    //can integrate actual api over here
    setTimeout(() => {
      setResponse(DUMMY_RESPONSE)
    }, 2000)

    setIsGenerated(true)
    setPromptVal("")
  }

  const handlePromptChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPromptError("")
    setPromptVal(e.target.value)
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
        {isGenerated && userPrompt !== "" && (
          <div className=" flex justify-end ">
            <p className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 text-lg w-3/4 font-normal whitespace-normal break-words">
              {userPrompt}
            </p>
          </div>
        )}
        {/* Response  */}
        {isGenerated && response !== "" && (
          <div className="  flex justify-start ">
            <p className="px-4 py-2 bg-blue-300 rounded-md text-gray-700 text-lg w-3/4 font-normal whitespace-normal break-words">
              {response}
            </p>
          </div>
        )}
        {/* user input  */}
        <input
          className="w-full text-lg  border border-gray-600 focus:outline-none  focus:border-gray-700 px-4 py-4 rounded-md"
          placeholder="Your prompt"
          value={promptVal}
          onChange={handlePromptChange}></input>
        {promptError !== "" && (
          <span className="text-red-400">{promptError}</span>
        )}
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
