import React from "react";

type Props = {
    name?: string;

}
export const Avatar = ({ name }: Props) => {
    return (
        <div>
            {name}
        </div>
    );
}