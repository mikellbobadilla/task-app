import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function HomePage() {
    return (
        <>
            <Header />
            <main className='p-3'>
                <Outlet />
            </main>
        </>
    )
}