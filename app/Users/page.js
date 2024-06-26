import React from 'react'

export default function Users() {
    return (
        <>
        {/* add usrs  */}
            <div className='border border-solid border-zinc-300 mx-auto max-w-4xl mt-52'>
                <h1 className='text-center mt-5 mb-5'>Add Users / Delete Users</h1>
                <form className='flex flex-row justify-center flex-wrap gap-3 mb-10'>

                    <label htmlFor="username">usrname:</label>
                    <input type="text" id='username' className='bg-slate-900 py-1 rounded-md w-40' />
                    <button className='bg-slate-900 text-white px-4 rounded-md font-semibold'>Add User</button>
                    <button className='bg-slate-900 text-white px-4 rounded-md font-semibold'>Delete User</button>
                </form>
            </div>

        {/* show users */}
        </>


    )
}
