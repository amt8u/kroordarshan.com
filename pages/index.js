import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kroordarshan.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Kroordarshan" />
        <p className="description">
         Domain owned by <a href="mailto:hi@cybercafe.dev">amt8u</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
