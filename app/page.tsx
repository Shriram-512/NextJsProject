import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white"></div>
        <div>Sign-In</div>
        <div>Sign-Up</div>
      </main>
    </div>
  )
}
