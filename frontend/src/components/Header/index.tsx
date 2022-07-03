import Container from "@components/Container";
import React, { memo } from "react";
import * as S from "@components/Header/styled";
 

const Header = () => {
    return (
        <S.HeaderStyled>
            <Container>
                header
            </Container>
        </S.HeaderStyled>
    );
};

export default memo(Header, () => true);
