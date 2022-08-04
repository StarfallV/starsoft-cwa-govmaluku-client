import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Nikola</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-start justify-center px-20 text-center text-gray-800 gap-4">
          <div className="flex flex-row gap-4 items-center justify-center h-32">
          <Image src="/logo_gov.png" alt="Vercel Logo" width={92} height={92} />
          <h1 className="text-5xl font-bold">
            Pemerintah Provinsi Maluku
          </h1>
          </div>

          <div className="flex flex-col items-baseline">
          <h1 className="text-6xl font-bold">
            Klinik Konsultasi dan Layanan{' '}
          </h1>
          <h1 className="text-6xl font-bold text-blue-600">
            ANJAB ABK
          </h1>
          </div>

          <div className="flex items-baseline space-x-6">
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-3 px-14 rounded-full transition ease-in-out dubration-300">
              Masuk
            </button>
            <button className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-10 rounded-full transition ease-in-out duration-300">
              Tentang kami
            </button>
          </div>
          
        </main>

        <footer className="flex h-24 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </footer>
      </div>
    </>
  )
}

export default Home
