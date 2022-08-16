import React from "react";

interface SomeButtonProps {
    value: string;
}

const SomeButton: React.FC<SomeButtonProps> = ({ value }) => <button type="button">{value}</button>;

export default SomeButton;
