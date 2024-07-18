import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import React from "react";
import { DropdownPositions } from "./constants";
interface DropdownArgs {
    isBlackBackground: boolean;
    position: DropdownPositions;
    offset: number;
    children: React.ReactNode;
}
declare const meta: Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<DropdownArgs>;
export declare const Primary: Story;
export declare const WithStarContent: Story;
export declare const WithEndContent: Story;
