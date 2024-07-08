import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import * as htmlToImage from 'html-to-image'
import useIsAndroid from '@/hooks/useIsAndroid'

// const isAndroid = () => {
//   return /Android/i.test(navigator.userAgent)
// }

export default function HomePage() {

  // const [isAndroidDevice, setIsAndroidDevice] = useState(false)
  const { isAndroid } = useIsAndroid()
  const androidTicketRef = useRef()
  const androidTicketRefAlt = useRef()
  const windowRef = useRef(null)

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

  const printPng = async () => {
    const dataUrl = await htmlToImage.toPng(androidTicketRef.current)
    const S = "#Intent;scheme=rawbt;"
    const P = "package=ru.a402d.rawbtprinter;end;"
    window.location.href = "intent:" + dataUrl + S + P
    // console.log(dataUrl)
  }

  const printJpg = async () => {
    const dataUrl = await htmlToImage.toJpeg(androidTicketRef.current)
    const S = "#Intent;scheme=rawbt;"
    const P = "package=ru.a402d.rawbtprinter;end;"
    window.location.href = "intent:" + dataUrl + S + P
    // console.log(dataUrl)
  }

  const printJpgXl = async () => {
    const dataUrl = await htmlToImage.toJpeg(androidTicketRefAlt.current)
    const S = "#Intent;scheme=rawbt;"
    const P = "package=ru.a402d.rawbtprinter;end;"
    window.location.href = "intent:" + dataUrl + S + P
    // console.log(dataUrl)
  }



  const printNewTab = () => {

    const html = `
      <html>
            <head>
                <title>Print Receipt</title>
            </head>
            <body>
                <p>Some html here</p>
            </body>
        </html>
    `

    const printWindow = windowRef.current.open("")

    if (printWindow) {
      printWindow.document.write(html)
      printWindow.document.close()
      printWindow.print()
      printWindow.close()
    } else {
      console.error("Ocurrió un error al intentar imprimir laventana")
    }
  }

  // useEffect(() => {
  //   setIsAndroidDevice(isAndroid())
  // }, [])

  useEffect(() => {
    windowRef.current = window;
  }, [])

  return (
    <>
      <Head>
        <title>Compured - Tienda</title>
        <meta name="description" content="Descripcion compured" key="Compured" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="Compured" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a
            href={`https://api.whatsapp.com/send?phone=${41779797672}&amp;text=Hola.`}
            target="_blank"
            rel="noopener"
        >
            <img src="https://drive.google.com/uc?export=view&id=1CKGaqyKGQ39ELT87Z5uDLVil3bplidOw" alt="" width={45} height={45} />
        </a>

      {/* <div>Is Android: {isAndroid ? "true" : "false"}</div>
      <div className="dont-print flex gap-2 justify-center mt-8">
        <button onClick={printAndroid} className="primary-button">Print Android</button>
        <button onClick={printWindows} className="primary-button">Print Windows</button>
        <button onClick={printNewTab} className="primary-button">Print New Tab</button>

        <button onClick={printPng} className="primary-button">Print PNG</button>
        <button onClick={printJpg} className="primary-button">Print JPG</button>
        <button onClick={printJpgXl} className="primary-button">Print JPG XL</button>
      </div>
      <div className="print-area border border-zinc-200 w-full max-w-[400px] absolute top-1 left-1 p-2 pb-28">
        <p className="print-area">Print Test Window method</p>
      </div>
      <div className="absolute bg-white w-[600px] p-4 -top-[800px] -left-[800px]">
        <div className="w-[350px]" ref={androidTicketRef}>
          <p>Print Test Android RawBT method text base</p>
        </div>
      </div>
      <div className="absolute bg-white w-[600px] p-4 -top-[800px] -left-[800px]">
        <div className="w-[350px]" ref={androidTicketRefAlt}>
          <p className="text-3xl">Print Test Android RawBT method 3xl</p>
        </div>
      </div> */}
    </>
  )
}