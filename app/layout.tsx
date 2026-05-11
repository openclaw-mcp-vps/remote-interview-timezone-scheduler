import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InterviewSync — Schedule interviews across global timezones smartly',
  description: 'Find optimal interview slots across multiple candidates and timezones. Built for HR managers at remote-first companies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8b732532-7ca3-4e7a-b3b4-a851c8252210"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
