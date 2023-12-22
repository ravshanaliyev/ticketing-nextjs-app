import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-nav px-10 py-4 shadow-2xl'>
            <div className='flex gap-4 items-center'>
                <Link href={"/"}>
                    <FontAwesomeIcon icon={faHome} className='icon' />
                </Link>
                <Link href={"/ticket-card/new"}>
                    <FontAwesomeIcon icon={faTicket} className='icon' />
                </Link>
            </div>
            <div>
                <p className='text-default-text'>ravshan123@gmail.com</p>
            </div>
        </nav>
    )
}

export default Navbar