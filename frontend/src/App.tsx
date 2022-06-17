import React from 'react';
import {Container, Stack as MantineStack} from "@mantine/core";
import {Stack} from "./components/Stack";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import axios from "axios";
import * as _ from "lodash";

const api_url = process.env.REACT_APP_API_URL ?? ""

type StackType = {
    name: string
    id: string
    description: string
    updated_at: string
    repo: {
        name: string
        owner: string
        type: string
    }
    tags: string[]
}


function useStackCount() {
    return useQuery<StackType[], Error>('groups', findAll)
}


const apiClient = axios.create({
    baseURL: api_url,
    headers: {
        "Content-type": "application/json",
    },
});

const findAll = async () => {
    const response = await apiClient.get<StackType[]>("/note");
    return response.data;
}

const queryClient = new QueryClient()

const stack = {
    repo: {
        owner: "",
        name: "",
        type: "",
    },
    tags: ["", ""],
}


const skeletonStacks = () => _.times(2, (n) => (
        <Stack key={n}>
            <Stack.Header repo={stack.repo} name={""} isLoading={true}/>
            <Stack.Body repo={stack.repo} markdown_description={""} isLoading={true}/>
            <Stack.Footer tags={stack.tags} updated_at={""} isLoading={true}/>
        </Stack>
    )
)

const StackList = () => {
    const groups = useStackCount()


    if (groups.isError) {
        return <div>An error occurred: {groups.error.message}</div>
    }

    if (groups.isLoading) {
        return <>{skeletonStacks()}</>
    }

    if (!groups.isSuccess) {
        return <div>Is not success!</div>
    }

    const stacks2 = groups.data.map(stack => {
        return (
            <Stack key={stack.id}>
                <Stack.Header repo={stack.repo} name={stack.name}/>
                <Stack.Body repo={stack.repo} markdown_description={stack.description}/>
                <Stack.Footer tags={stack.tags} updated_at={stack.updated_at}/>
            </Stack>
        )
    })

    return (<>{stacks2}</>)
}

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Container size="md" pt="xl">
                <MantineStack justify="flex-start" spacing="xl">
                    <StackList/>
                </MantineStack>
            </Container>
        </QueryClientProvider>)
}
