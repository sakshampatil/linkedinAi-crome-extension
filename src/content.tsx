import { AiIcon } from "assets/icons"
import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { Fragment, useEffect, useState, type MouseEvent } from "react"

import Modal from "~features/Modal"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [element, setElement] = useState<HTMLElement | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleFocusIn = (event: Event) => {
      const target = event.target as HTMLElement
      if (target && target.matches(".msg-form__contenteditable")) {
        setIsFocused(true)
        setElement(target)
      } else {
        setIsFocused(false)
      }
    }

    document.addEventListener("focusin", handleFocusIn)
    // document.addEventListener("focusout", handleFocusOut)
    return () => {
      document.removeEventListener("focusin", handleFocusIn)
      // document.removeEventListener("focusout", handleFocusOut)
    }
  }, [])

  const handleModalOpen = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    // e.stopPropagation()
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <Fragment>
      {isFocused && element !== null && (
        <div
          onClick={(e) => handleModalOpen(e)}
          className={`cursor-pointer fixed `}
          style={{
            top: `${element.getBoundingClientRect().bottom - 40}px`,
            left: `${element.getBoundingClientRect().right - 50}px`
          }}>
          <AiIcon />
        </div>
      )}
      {isModalOpen && (
        <Modal
          isModalOpen
          handleModalClose={handleModalClose}
          element={element}
        />
      )}
    </Fragment>
  )
}

export default PlasmoOverlay
