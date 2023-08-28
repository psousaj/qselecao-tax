import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import '@/styles/globals.scss'
import { UserProvider } from '@/common/UserContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tax Formulário de Seleção',
  description: 'Survey task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
      <html lang="pt-BR">
        <body className={`${inter.className}`}>
          <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
          {children}
        </body>
      </html>
    </UserProvider>
  )
}
