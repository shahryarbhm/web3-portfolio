'use client';

const navItems = [
    { path: '#home', label: 'Home' },
    { path: '#projects', label: 'Projects' },
    { path: '#contact', label: 'Contact' },
];

export default function Navbar() {
    return (
        <nav className="flex justify-center items-center gap-8">
            {navItems.map(({ path, label }) => (
                <a
                    key={path}
                    href={path}
                    className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    {label}
                </a>
            ))}
        </nav>
    );
} 