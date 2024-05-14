import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import * as htmlToImage from 'html-to-image'

const isAndroid = () => {
  return /Android/i.test(navigator.userAgent)
}

export default function HomePage() {

  const [isAndroidDevice, setIsAndroidDevice] = useState(false)
  const androidTicketRef = useRef()

  const printWindows = () => {
    window.print()
  }

  const printAndroid = async () => {
    const dataUrl = await htmlToImage.toPng(androidTicketRef.current)
    const S = "#Intent;scheme=rawbt;"
    const P = "package=ru.a402d.rawbtprinter;end;"
    window.location.href = "intent:" + dataUrl + S + P
    // console.log(dataUrl)
  }

  useEffect(() => {
    setIsAndroidDevice(isAndroid())
  }, [])

  console.log(isAndroidDevice)

  return (
    <>
      <Head>
        <title>Compured - Tienda</title>
        <meta name="description" content="Descripcion compured" key="Compured" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="Compured" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Is Android: {isAndroidDevice ? "true" : "false"}</div>
      <div className="dont-print flex gap-2 justify-center mt-8">
        <button onClick={printAndroid} className="primary-button">Print Android</button>
        <button onClick={printWindows} className="primary-button">Print Windows</button>
      </div>
      <div className="print-area border border-zinc-200 w-full max-w-[400px] absolute top-1 left-1 p-2 pb-28">
        <p className="print-area">Print Test Window method</p>
      </div>
      <div className="absolute bg-white w-[600px] p-4 -top-[800px] -left-[800px]">
        <div className="w-[350px]" ref={androidTicketRef}>
          <p>Print Test Android RawBT method</p>
        </div>
      </div>
    </>
  )
}