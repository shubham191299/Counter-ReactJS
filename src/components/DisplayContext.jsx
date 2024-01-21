import { useSelector } from "react-redux"

export default function DisplayContext() {
    const {counterValue} = useSelector((store) => store.counter)
    
  return (
    <p className="fs-5 mb-4">Counter current value: {counterValue}</p>
  )
}
