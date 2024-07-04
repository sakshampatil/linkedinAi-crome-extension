import { GenerateIcon } from "assets/icons"
import React, { type FC } from "react"

interface ModalProps {
  isModalOpen: boolean
  handleModalClose: () => void
}

const Modal: FC<ModalProps> = ({ isModalOpen, handleModalClose }) => {
  return (
    <div
      onClick={handleModalClose}
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center  ">
      <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-lg w-full flex flex-col justify-end items-end gap-2">
        <input
          className="w-full text-lg font-medium border border-gray-600 focus:outline-none  focus:border-gray-700 px-4 py-4 rounded-md"
          placeholder="Your prompt"></input>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-fit text-lg font-semibold flex flex-row items-center justify-center gap-1">
          <GenerateIcon className={"w-6 h-6"} />

          <span>Generate</span>
        </button>
      </div>
    </div>
  )
}

export default Modal
