import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
declare const meta: Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithText: Story;
export declare const WithImage: Story;
export declare const WithBorder: Story;
export declare const Disabled: Story;
export declare const AvatarGroupHorizontal: Story;
export declare const AvatarGroupVertical: Story;
export declare const AvatarGroupDisabled: Story;