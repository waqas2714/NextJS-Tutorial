import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <User userName={"Waqas"}/>
      <User userName={"Numair"}/>
      <User userName={"Maaz"}/>
      <User userName={"Safwan"}/>
      <User userName={"Ali"}/>
    </main>
  )
}

const User = ({userName})=>{
  return(
    <h1>User name is {userName}</h1>
  )
}