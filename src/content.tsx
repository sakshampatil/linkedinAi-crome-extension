import { AiIcon } from "assets/icons"
import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"

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

  useEffect(() => {
    const handleFocusIn = (event: Event) => {
      const target = event.target as HTMLElement
      if (target && target.matches(".msg-form__contenteditable")) {
        setIsFocused(true)
        setElement(target)
      }
    }

    const handleFocusOut = (event: Event) => {
      const target = event.target as HTMLElement
      if (target && target.matches(".msg-form__contenteditable")) {
        setIsFocused(false)
        setElement(null)
      }
    }

    document.addEventListener("focusin", handleFocusIn)
    document.addEventListener("focusout", handleFocusOut)
    return () => {
      document.removeEventListener("focusin", handleFocusIn)
      document.removeEventListener("focusout", handleFocusOut)
    }
  }, [])

  return (
    isFocused &&
    element !== null && (
      <div
        className={`cursor-pointer absolute `}
        style={{
          top: `${element.getBoundingClientRect().bottom - 40}px`,
          left: `${element.getBoundingClientRect().right - 50}px`
        }}>
        <AiIcon className={""} />
      </div>
    )
  )
}

export default PlasmoOverlay
