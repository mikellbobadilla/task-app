import { BookIcon } from './icons/BookIcon'

export function Login() {
    return (
        <>
            <main className='flex flex-col justify-center items-center p-3 lg:min-h-screen'>
                <section className='mx-auto w-full max-w-xs'>

                    <div className='flex justify-center items-center gap-3 mb-5 p-5 lg:p-2'>
                        <BookIcon className='text-secondary-600 size-10' />
                        <h1 className='text-3xl'>
                            Tasks App
                        </h1>
                    </div>

                    <form className='lg:mb-24'>
                        <h2 className='mb-4 text-2xl'>Login</h2>
                        <div className='mb-5'>
                            <label htmlFor="username" className='block text-accent-200 text-sm'>
                                Username
                            </label>
                            <input type="text" id='username' className='bg-[#1a1727] mt-1 p-3 rounded-md w-full text-sm' placeholder='User...' />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="password" className='block text-accent-200 text-sm'>
                                Password
                            </label>
                            <input type="password" id='password' className='bg-[#1a1727] mt-1 p-3 rounded-md w-full text-sm' placeholder='*****...' />
                        </div>

                        <button type='submit' className='bg-[#a18ddf] mt-3 p-3 rounded-lg w-full font-semibold text-accent-900'>
                            Sign in
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}