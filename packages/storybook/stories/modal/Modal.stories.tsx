/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "@components/modal/src/Modal";
import React, { useState } from "react";
import { Button } from "@components/index";
import { backdrops, placements, sizes } from "@components/modal/src/constants";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    size: {
      options: Object.values(sizes),
      control: { type: "select" },
    },
    backdrop: {
      options: Object.values(backdrops),
      control: { type: "select" },
    },
    placement: {
      options: Object.values(placements),
      control: { type: "select" },
    },
    blur: {
      control: { type: "number" },
    },

    button: {
      table: { disable: true },
    },
    value: {
      table: { disable: true },
    },
    setValue: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "10px",
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <Modal
        {...args}
        value={isOpen}
        setValue={setIsOpen}
        button={
          <Button radius="md" color="primary" onClick={() => setIsOpen(true)}>
            Open Modal
          </Button>
        }
      >
        {({ closeModal }) => (
          <>
            <div className="flex flex-col gap-1">Modal Title</div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium, blanditiis ullam, explicabo voluptatem excepturi
                corporis labore dignissimos quibusdam dolore incidunt
                exercitationem at sed ab autem sapiente dolorum magnam mollitia
                aperiam fugiat minus, placeat nisi. A, pariatur neque, culpa
                iste molestiae, laborum omnis possimus ipsam nesciunt officiis
                assumenda provident consequuntur? Modi magni ducimus culpa
                veniam porro assumenda esse hic alias beatae, obcaecati quaerat
                laborum mollitia similique numquam nihil soluta error aliquid
                repellendus animi omnis, molestias, quisquam libero sed nisi?
                Temporibus eveniet earum eum quam iste laborum exercitationem
                totam autem sapiente, commodi praesentium consectetur nemo
                corrupti nesciunt aliquam laboriosam sequi nostrum possimus!
              </p>
            </div>
            <div style={buttonContainerStyle}>
              <Button onClick={closeModal} radius="sm" customColor="red">
                Close
              </Button>
              <Button radius="sm">Action</Button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export const Primary: Story = {
  render: (args) => <Template {...args} />,
};

export const Size: Story = {
  render: (args) => <Template {...args} />,
};

Size.args = {
  size: "xl",
};

export const Backdrop: Story = {
  render: (args) => <Template {...args} />,
};

Backdrop.args = {
  backdrop: "blur",
};

export const Placement: Story = {
  render: (args) => <Template {...args} />,
};

Placement.args = {
  placement: "bottom",
};
