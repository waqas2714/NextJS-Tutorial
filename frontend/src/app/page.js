"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [nameList, setNameList] = useState(["Waqas", "Maaz"]);
  const [name, setName] = useState(nameList[0]);
  const [nameBool, setNameBool] = useState(true);
  const changeName = ()=>{
    nameBool ? setName(nameList[0]) : setName(nameList[1]);
    setNameBool(!nameBool);
  }

  const Username = ()=>{
    return(
      <h1>User name is {name}</h1>
    )
  }
  return (
    <main className={styles.main}>
    <Username />
    <button onClick={changeName}>Click Me</button>
    </main>
  )
}