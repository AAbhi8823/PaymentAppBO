import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { variant } from "@app/type/components/reactToastify"

const ReactToastify = (message: string, variant: variant, autoClose: number = 1000) => {

  const Notify = toast[variant];

  return (
    Notify(message, {
      position: "bottom-right",
      autoClose: autoClose,
    })
  )
}

export default ReactToastify