import Head from 'next/head'

export default function HomePage() {


  const handleClick = () => {
    window.print()
  }

  return (
    <>
      <Head>
        <title>Compured - Tienda</title>
        <meta name="description" content="Descripcion compured" key="Compured" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="Compured" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full pt-5 flex gap-2 justify-center">
        <a className="bg-zinc-100 rounded-md p-4" href="rawbt:Print%20Test1%0A%0A"> Print Test </a>
        <button className="bg-zinc-100 rounded-md p-4" onClick={handleClick}> Print Test 2</button>
      </div>
      <div className='print-area'>
        Print test for kitchen only
      </div>
    </>
  )
}