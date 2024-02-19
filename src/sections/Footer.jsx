import React from 'react'

function Footer() {
  return (
    <footer className='bg-grn bottom-0'>
        <nav className='flex text-center items-center justify-center lg:justify-between mx-auto max-w-screen-xl align-center p-5'>
            <p>Tolegenov Aibar</p>
            <ul>
                <li className='mb-5'>Contacts</li>
                <li>+7 705 879 7593</li>
                <li>aibartolegenov.2283@gmail.com</li>
                <li>quovein@gmail.com</li>
                <li>Astana, Nazarbayev University, Kazakhstan</li>
            </ul>
            <ul>
                <li className='mb-5'>Links</li>
                <li><a href="https://github.com/oiibar">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/aibar-tolegenov-167a962a3/">LinkedIn</a></li>
                <li><a href="https://github.com/oiibar/CV">CV</a></li>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer