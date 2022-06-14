import React from 'react';
import {Container, Stack as MantineStack,} from "@mantine/core";
import {serverless} from "./api/fake";
import {Stack} from "./components/Stack";

export default function App() {

    return (
        <Container size="md" pt="xl">
            <MantineStack justify="flex-start" spacing="xl">
                {serverless.map(stack => <Stack {...stack}/>)}
            </MantineStack>
        </Container>)
}
