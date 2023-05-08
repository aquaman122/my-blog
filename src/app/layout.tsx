import Providers from './Providers';
import Header from './component/Header';
import './globals.css'

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
        <Header />
      {/* {body} */}

      {/* {nav} */}
      {children}
      </Providers>
      </body>
    </html>
   </>
  )
}
