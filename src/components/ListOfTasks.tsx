import { TrashIcon } from './icons/TashIcon'

export function ListOfTasks() {
    return (
        <section className='mx-auto lg:mt-10 w-full max-w-screen-xl'>

            <h2 className='font-bold text-2xl lg:text-3xl'>
                Tasks
            </h2>

            <ul className='gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5'>
                <li className='bg-[#1a1727] p-3 rounded-lg'>
                    <header className='flex justify-between items-center mb-4'>
                        <h3 className='font-bold text-xl'>Sacar la basura</h3>
                        <button>
                            <TrashIcon className='text-accent-400 transition-all size-6 hover:scale-105' />
                        </button>
                    </header>
                    <div className='flex justify-between items-center mb-3'>
                        <p className='text-accent-200 text-sm'>
                            Target date: <span>2024-05-02</span>
                        </p>
                        <div className='flex justify-between items-center gap-1'>
                            <input type="checkbox" id='isDone' className='accent-accent-500 size-4' />
                            <label htmlFor="isDone" className='text-sm'>Done</label>
                        </div>
                    </div>
                    <p className='mb-3'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, blanditiis possimus! Placeat tenetur eos, aliquid earum a iste eius nam praesentium ipsam rem eligendi suscipit! Fugit enim possimus voluptas ea!
                    </p>
                </li>

            </ul>


        </section>
    )
}