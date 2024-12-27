'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { portfolioConfig } from '@/config/portfolio';

interface POAP {
    event: {
        name: string;
        description: string;
        image_url: string;
        start_date: string;
        end_date: string;
    };
    tokenId: string;
}

export default function POAPGallery() {
    const [poaps, setPOAPs] = useState<POAP[]>([]);
    const [loading, setLoading] = useState(true);
    const { enabled, title, description, ensAddress } = portfolioConfig.poap;

    useEffect(() => {
        if (!enabled) return;

        const fetchPOAPs = async () => {
            if (!ensAddress) {
                console.error('ENS address not configured');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`https://api.poap.tech/actions/scan/${ensAddress}`, {
                    headers: {
                        'Accept': 'application/json',
                        'X-API-Key': process.env.NEXT_PUBLIC_POAP_API_KEY || ''
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setPOAPs(data);
            } catch (error) {
                console.error('Error fetching POAPs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPOAPs();
    }, [enabled, ensAddress]);

    if (!enabled) return null;

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
            </div>
        );
    }

    return (
        <section className="w-full max-w-auto mx-auto px-4" id="poaps">
            <div className="w-full p-12">
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-gray-400 mt-2">{description}</p>
                </div>

                {poaps.length === 0 ? (
                    <p className="text-center text-gray-400">No POAPs found for this address</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {poaps.map((poap) => (
                            <div
                                key={poap.tokenId}
                                className="bg-black/20 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center hover:transform hover:scale-105 transition-transform"
                            >
                                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                                    <Image
                                        src={poap.event.image_url}
                                        alt={poap.event.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-center mb-2">{poap.event.name}</h3>
                                <p className="text-sm text-gray-400 text-center">
                                    {new Date(poap.event.start_date).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
} 