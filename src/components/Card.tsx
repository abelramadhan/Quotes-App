import { PropsWithChildren, Suspense } from 'react';

interface CardProps extends PropsWithChildren {
    title?: string;
}

const Card = (props: CardProps) => {
    return (
        <div className=' bg-white shadow-sm rounded-lg text-gray-800 border border-gray-300 divide-y divide-gray-300 transition-all'>
            <h4 className='font-semibold text-lg p-3'>{props.title}</h4>
            <div className='p-3'>{props.children}</div>
        </div>
    );
};

export default Card;
