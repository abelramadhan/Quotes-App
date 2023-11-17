import Card from '@/components/Card';
import CustomQuotes from '@/components/CustomQuotes';
import FavoriteQuotes from '@/components/FavoriteQuotes';
import KanyeQuote from '@/components/KanyeQuote';
import Image from 'next/image';

export default function Home() {
    return (
        <main className='min-h-screen bg-gray-100 p-8'>
            <div className='flex flex-row gap-4 w-full flex-wrap'>
                <div className='space-y-4 flex-1'>
                    <KanyeQuote />
                    <FavoriteQuotes />
                </div>
                <div className='flex-1'>
                    <CustomQuotes />
                </div>
            </div>
        </main>
    );
}
