"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Home() {
  const [nameList, setNameList] = useState(["Waqas", "Maaz"]);
  const [nameBool, setNameBool] = useState(true);
  const [name, setName] = useState(nameList[0]);
  const router = useRouter();

  const Username = ()=>{
    return(
      <h1>User name is {name}</h1>
    )
  }

  const changeName = ()=>{
    setNameBool(!nameBool);
    nameBool ? setName(nameList[0]) : setName(nameList[1]);
  }

  const navigateTo = (name)=>{
    router.push(name);
  }

  return (
    <main>
    <Username />
    <button onClick={changeName}>Click Me</button>
    <button onClick={()=>{navigateTo("/login")}} style={{display: "block", marginTop : "1rem"}}>Go to Login Page</button>
    <button onClick={()=>{navigateTo("/about")}} style={{display: "block", marginTop : "1rem"}}>Go to About Page</button>
    </main>
  )
}