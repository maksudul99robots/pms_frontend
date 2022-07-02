import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/Navbar'
import { useEffect } from 'react'
import Router from 'next/router'
export default function Home() {
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      Router.push('/login');
    }
  })

  return (
    <div className={`${styles.container}  ` }>
        <NavBar/>
    </div>
  )
}
