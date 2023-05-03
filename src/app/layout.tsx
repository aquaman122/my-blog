import Providers from './Providers';
import Header from './component/Header';
import './globals.css'
import { Nanum_Pen_Script } from 'next/font/google'

const NanumPenScript = Nanum_Pen_Script({ subsets: ['latin'],
weight: "400", });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
    <html lang='en'>
      <body>
      <Providers>
        <div className={NanumPenScript.className}>
          <Header />
        </div>

      {/* {body} */}

      {/* {nav} */}
      {children}
      </Providers>
      </body>
    </html>
   </>
  )
}
