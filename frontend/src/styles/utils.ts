import styled from "styled-components";

export const Box = styled.div<{ m?: string }>`
    display: block;
    ${({ m }) => `${m && "margin: " + m}`};
`;
