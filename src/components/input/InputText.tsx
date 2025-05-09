import React from "react";

interface InputTextProps {
    style? : string;
    placeholder? : string;
    id?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC <InputTextProps> = ({
    style, ...outrasProps  
} : InputTextProps) => {
    return (
        <input type = "text"
            {...outrasProps}
            className={`${style} border px-3 py-2 rounded-lg text-gray-900`} />   
    )
}