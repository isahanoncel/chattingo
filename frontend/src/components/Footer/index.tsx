import { FC, memo } from "react";
import * as S from "@components/Footer/styled";
import Container from "@components/Container";

const Footer: FC = () => {

    return (
        <S.FooterStyled>
            <Container>
                <S.Wrapper>
                    footer
                </S.Wrapper>
            </Container>
        </S.FooterStyled>
    );
};

export default memo(Footer, () => true);
