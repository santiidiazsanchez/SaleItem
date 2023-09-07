import React from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";

export default function CheckboxBrands() {
    const technologyBrands = [
        "Apple",
        "Samsung",
        "Microsoft",
        "Sony",
        "Google",
        "Amazon",
        "Lenovo",
        "Dell",
        "HP",
        "LG",
    ];

    return (
        <CheckboxGroup
            defaultValue={["Apple", "Samsung"]}
            color="warning"
        >
            {technologyBrands.map((brand) => (
                <Checkbox
                    key={brand}
                    value={brand}
                >
                    {brand}
                </Checkbox>
            ))}
        </CheckboxGroup>
    );
}
