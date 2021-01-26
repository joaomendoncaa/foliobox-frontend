import Head from 'next/head'
import Link from 'next/Link'

import styles from '../styles/Home.module.css'
import TopHeader from '../components/TopHeader'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeader />
      <h1>Hello Next!</h1>
      <Link href="./profile">
        <a>
          Navigate to profile
        </a>
      </Link>
    </div>
  )
}
