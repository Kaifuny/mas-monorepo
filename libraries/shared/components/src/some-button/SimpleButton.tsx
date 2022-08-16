import React from "react";

interface ISimpleButtonProps {
    label: React.ReactNode;
}

const SimpleButton: React.FC<ISimpleButtonProps> = ({ label }) => {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <button type="button" onClick={() => setCount(count + 1)}>
                {label}
            </button>
            <span>you have clicked me {count} times!</span>
        </>
    );
};

export default SimpleButton;
