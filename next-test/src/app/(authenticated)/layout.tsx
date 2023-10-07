import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'Aplicação next.js de teste',
        template: '%s | Next.js Teste',
        // absolute: 'Next.js Lucas',
    },
    robots: {
        follow: true,
        index: true,
    },
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
            <h1>Sistema: Olá Mundo!</h1>
            <nav>
                <ul className='flex gap-2'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/users">Usuários</Link></li>
                    <li><Link href="/login">Login</Link></li>
                </ul>
            </nav>
            <hr />

            
            {children}</body>
        </html>
    )
}