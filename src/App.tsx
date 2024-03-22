import { BookIcon } from './components/icons/BookIcon'

function App() {

  return (
    <>
      <header className='border-b lg:border-b-0 border-gray-800 p-3 h-16 flex items-center w-full max-w-5xl lg:max-w-xl mx-auto lg:mt-5 lg:bg-gray-800/20 lg:rounded-full lg:px-8'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center gap-2'>
            <BookIcon className='text-secondary-600 size-7' />
            <h1 className='text-xl font-semibold'>Task App</h1>
          </div>
          <nav>
            <ul className='flex justify-between items-center gap-4'>
              <li>
                <a href="#" className='text-sm font-semibold'>Create Task</a>
              </li>

              <li className='py-2 px-3 rounded-3xl bg-secondary-800/70 text-accent-300'>
                <a href="#" className='text-sm font-semibold'>Tasks</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

    </>
  )
}

export default App
