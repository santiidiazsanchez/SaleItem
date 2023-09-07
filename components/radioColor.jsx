import React from "react";
import { RadioGroup, Radio } from "@nextui-org/radio";

export default function RadioColor() {
    const colorOptions = ["Black", "White", "Silver", "Space Gray", "Rose Gold"];

    return (
        <RadioGroup
            color="warning"
        >
            {colorOptions.map((color) => (
                <Radio key={color} value={color}>
                    {color}
                </Radio>
            ))}
        </RadioGroup>
    );
}