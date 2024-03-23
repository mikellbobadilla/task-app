export function TaskForm() {
    return (
        <section className='mx-auto lg:mt-10 w-full max-w-md'>

            <h2 className='font-bold text-2xl lg:text-3xl'>
                Task Form
            </h2>

            <form className='mt-5'>
                <label htmlFor="taskName" className='block text-accent-200 text-sm'>
                    Task name
                </label>
                <input type="text" id='taskName' className='bg-[#1a1727] mt-1 p-3 rounded-md w-full text-sm' placeholder='Make a homework...' />

                <label htmlFor="targetDate" className='block mt-3 text-accent-200'>
                    Target date
                </label>
                <input type="date" id='targetDate' className='bg-[#1a1727] mt-1 p-3 rounded-lg w-full text-sm' />

                <label htmlFor="description" className='block mt-3 text-accent-200'>
                    Description
                </label>
                <textarea id='description' className='bg-[#1a1727] mt-1 p-3 rounded-lg w-full h-40 text-sm' />

                <button type='submit' className='bg-[#a18ddf] mt-3 p-3 rounded-lg w-full font-semibold text-accent-900'>
                    Add task
                </button>

            </form>

        </section>
    )
}