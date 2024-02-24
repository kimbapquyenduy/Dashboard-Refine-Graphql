import React from "react";
import { Avatar as AntdAvartar, AvatarProps } from "antd";
import { getNameInitials } from "../utilities";
type Props = AvatarProps & {
  name?: string;
};
const CustomAvatar = ({ name, style, ...rest }: Props) => {
  return (
    <AntdAvartar
      alt={name}
      size="small"
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        border: "none",
        ...style,
      }}
      {...rest}
    >
      {getNameInitials(name || "")}
    </AntdAvartar>
  );
};

export default CustomAvatar;
