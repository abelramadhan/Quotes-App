import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    className?: string;
}
const Button = (props: ButtonProps) => {
    return (
        <button
            {...props}
            className={
                'bg-gray-900 text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-gray-800 whitespace-nowrap ' +
                props.className
            }
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
