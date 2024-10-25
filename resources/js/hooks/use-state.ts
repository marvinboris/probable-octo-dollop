import React from "react";

export function useState<T>(currentValue: T) {
    const [value, setValue] = React.useState(currentValue);

    React.useEffect(() => {
        setValue(currentValue);
    }, [currentValue]);

    return [value, setValue, currentValue] as [T, typeof setValue, T];
}
