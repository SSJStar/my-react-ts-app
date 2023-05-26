import React, { FC } from 'react';

interface ButtonProps {
    onClick?: () => void;
    title: string
}

export const MyButton: FC<ButtonProps> = ({
                                            onClick = () => alert('Default onClick'),
                                            title
                                        }) => {
    return (
        <button onClick={onClick}>{title}</button>
    );
}

// function MyButton() {
//     return (
//         <button>Click me</button>
//     );
// }
export default MyButton;