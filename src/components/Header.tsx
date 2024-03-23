import { NavLink } from 'react-router-dom'
import './Header.css'
import { BookIcon } from './icons/BookIcon'

export function Header() {

    return (
        <header className='flex items-center border-gray-800 lg:bg-gray-800/20 mx-auto lg:mt-5 lg:px-8 p-3 border-b lg:border-b-0 lg:rounded-full w-full max-w-5xl lg:max-w-xl h-16'>
            <div className='flex justify-between items-center w-full'>
                <div className='flex items-center gap-2'>
                    <BookIcon className='text-secondary-600 size-7' />
                    <h1 className='font-semibold text-xl'>Task App</h1>
                </div>
                <nav>
                    <ul className='flex justify-between items-center gap-4'>
                        <li className='px-3 py-2 rounded-3xl'>
                            <NavLink to="/task-form" className='font-semibold text-sm'>Create Task</NavLink>
                        </li>

                        <li className='px-3 py-2 rounded-3xl'>
                            <NavLink to="/tasks" className='font-semibold text-sm'>Tasks</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}