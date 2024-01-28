import { useEffect, useState } from "react"


type NumberChangerProps =  { 
  initialValue: number
}

const NumberChanger = ({ initialValue }: NumberChangerProps) => {
  const [number, setNumber] = useState(initialValue ?? 0);


  useEffect(() => {
    const interval = setInterval(() => {
      setNumber( ps => ps + 1);
    }, 1000)

    return () => clearInterval(interval);
  },[initialValue])


  useEffect(() => {
    setNumber(initialValue)
  },[initialValue])
  
  return (
    <div>
      <p>Number changing every 1 second</p>
      <div>Try passing your initialValue : {initialValue}</div>
      <b>{number}</b>
    </div>
  )
}

export default NumberChanger