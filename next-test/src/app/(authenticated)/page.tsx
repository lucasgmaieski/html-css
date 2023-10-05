import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    description: 'Descrição para o site que pode conter até 160 caracteres',
    openGraph: {
        images: ['https://placeholder.co/1280x768?text=Meus+posts'],
        authors: ['Lucas Maieksi'],
    },
    twitter: {
        images: ['https://placeholder.co/1280x768?text=Meus+posts'],
    },
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Estou na home do aplicativo.
        </main>
    )
}
