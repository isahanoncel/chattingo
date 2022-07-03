import styled from "styled-components";

export const ContainerWrapper = styled.div<{ maxWidth?: string }>`
    max-width: ${({ maxWidth }) => maxWidth || "1216px"};
    margin: 0 auto;
    padding: 0 16px;
`;
