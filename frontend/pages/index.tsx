import { GetServerSideProps } from "next";
import React, { FC } from "react";
import Container from "@components/Container";
 
const Home: FC = () => {
    return (
        <Container>
         home page
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {

    return {
        props: {
            
        },
    };
};

export default Home;
