import Link from 'next/link'
import React from 'react'

const AuthSection = () => {
    return (
        <div className="flex gap-3">
            <Link href={"/login"}>
                <p
                    className="bg-teal-500 text-white min-w-30 px-1 text-center font-bold  py-3  cursor-pointer rounded-sm hover:bg-teal-400
                    active:bg-teal-600 transition-all duration-300"
                >
                    Login
                </p>
            </Link>
            <Link href={"/login"}>
                <p
                    className="border border-teal-500 text-teal-500 min-w-30 px-1 text-center font-bold  py-3  cursor-pointer rounded-sm hover:bg-teal-400 hover:text-white
                    active:bg-teal-600 transition-all duration-300"
                >
                    Sign Up
                </p>
            </Link>
        </div>
    )
}

export default AuthSection
