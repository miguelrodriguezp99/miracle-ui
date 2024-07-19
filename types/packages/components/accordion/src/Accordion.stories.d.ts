import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@mirakle-ui/accordion";
import { AccordionSelectionModes, AccordionVariants } from "./constants";
interface AccordionArgs {
    variant: AccordionVariants;
    selectionMode: AccordionSelectionModes;
    isCompact: boolean;
}
declare const meta: Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<AccordionArgs>;
export declare const Primary: Story;
export declare const WithLabel: Story;
export declare const UniqueOpen: Story;
export declare const Compact: Story;
export declare const Bordered: Story;
export declare const Shadow: Story;
export declare const Splitted: Story;
export declare const Custom: Story;
