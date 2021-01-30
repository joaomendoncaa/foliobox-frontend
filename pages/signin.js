import Head from 'next/head'

import TopHeader from "../components/TopHeader";

export default function SignIn() {
    return (
        <div>
            <Head>
                <title>Foliobox | Sign in</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopHeader />
            <h1>Sign In</h1>
        </div>
    )
}