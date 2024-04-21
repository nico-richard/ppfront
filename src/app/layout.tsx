import { Navbar } from '@/components/Navbar'
import '../styles/global.sass'
import { Header } from '@/components/Header'

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <div className="app">
                    <Navbar />
                    <div className="page">{children}</div>
                </div>
            </body>
        </html>
    )
}
