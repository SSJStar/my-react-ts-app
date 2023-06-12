// src/component/Icon.tsx
import React, { FC } from "react";
import * as AllIcons from "@ant-design/icons";

const Icon: FC<{ name: keyof typeof AllIcons }> = ({ name }) => {
    const Comp = AllIcons[name] as any; // 这里写成 any 的原因有机会再开一篇单独来解释
    return <Comp />;
};

export default Icon;