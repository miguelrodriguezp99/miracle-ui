import React from 'react';
import { Button, ButtonProps } from './Button'; // Import the ButtonProps type from the Button file

type ButtonListProps = {
    buttons: ButtonProps[];
};

const ButtonList: React.FC<ButtonListProps> = ({ buttons }) => {
    return (
        <>
            {buttons.map((button, index) => (
                <Button key={index} {...button} />
            ))}
        </>
    );
};

export default ButtonList;