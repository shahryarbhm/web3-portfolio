'use client';

import { portfolioConfig } from '@/config/portfolio';
import { useState } from 'react';

export default function ContactSection() {
    const { contact } = portfolioConfig;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section className="w-full max-w-2xl" id="contact">
            <h2 className="text-2xl font-bold mb-4 text-center">{contact.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                {contact.description}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                    <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                )}
            </form>

            <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-center">Connect with me</h3>
                <div className="flex justify-center gap-6">
                    {contact.socials.map(({ name, url, icon: Icon, label }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                            aria-label={label}
                            title={label}
                        >
                            <Icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
} 