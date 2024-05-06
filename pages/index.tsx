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
      <div className="flex flex-col h-screen bg-zinc-100">
        <div className="bg-white h-16 grid place-items-center fixed top-0 w-full">
          <h1>Categories</h1>
        </div>
        <div className="flex-1 px-2 pt-20 overflow-auto">
          <div className="grid grid-cols-12 gap-2 pb-28">
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
            <div className="col-span-6 bg-zinc-300 rounded-md aspect-square"></div>
          </div>
        </div>
        <div className="fixed bottom-0 z-50 bg-white h-20 w-full">
          <h2>Cart</h2>
        </div>
      </div>
    </>
  )
}