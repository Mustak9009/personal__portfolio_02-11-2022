import Head from 'next/head';
import {Header} from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mustak sk</title>
        <meta name="description" content='That is my personal portfolio web site..it was created by me😃' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <h1 className='text-2xl text-center bg-orange-400'>PortFolio</h1>
    </div>
  )
}
