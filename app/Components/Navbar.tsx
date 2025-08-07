import React from 'react'
import Link from 'next/link'



const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
    return (
        <div className="z-10  w-40 fixed navbar bg-primary  text-primary-content">
    
            <div className="flex-1" />
            <nav className="flex gap-4">
                {navLinks.map(link => (
                    <Link key={link.href} href={link.href} scroll={true} className="btn btn-ghost normal-case text-md">
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Navbar