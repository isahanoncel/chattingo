import React, { FC, memo } from "react";
import * as S from "@components/Container/styled";

interface IContainer {
    children: React.ReactNode;
    maxWidth?: string;
}

const Container: FC<IContainer> = ({ children, maxWidth }) => {
    return (
        <S.ContainerWrapper maxWidth={maxWidth}>{children}</S.ContainerWrapper>
    );
};

export default memo(Container, () => true);
