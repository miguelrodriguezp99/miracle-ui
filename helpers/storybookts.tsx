
export const getOptionsArgTypes = (options: string[]) => ({
    description: "**options:**",
    table: {
        type: {
            summary: options.map((option) => `\`${option}\``).join(" | "),
        },
    },
    control: {
        type: "select",
        options: options,
    },
});
