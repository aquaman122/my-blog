'use client'
import { ThemeProvider } from 'next-themes';

type Props = {
  children: any,
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  )
}