import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto md:max-w-3xl md:px-4 min-h-screen">
      <Head>
        <title>Next.js 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center bg-white p-4">
        <img
          className="m-auto my-4 w-24 sm:w-auto"
          alt="Ihatetomatoes"
          src="/assets/img_logo.svg"
        />
        <h1 className="mx-auto text-4xl font-bold">
          Welcome to Next.js 101!
        </h1>
        <Link href="/page-two"><a>Page Two</a></Link>
      </main>

    </div>
  )
}
