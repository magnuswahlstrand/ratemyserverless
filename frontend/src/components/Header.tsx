import {ActionIcon, Anchor, Group, Text, Title} from "@mantine/core";
import React from "react";
import {FileCode} from "tabler-icons-react";

type HeaderProps = {
    name: string
    org: string
    repo: string
};

export function Header({name, org, repo}: HeaderProps) {
    return (
        <>
            <Title order={3}>{name}</Title>
            <Group spacing="xs">
                <ActionIcon size="sm" variant="transparent" color="dark" mr={0}>
                    <FileCode/>
                </ActionIcon>
                <Anchor>
                    <Text>{org} / {repo}</Text>
                </Anchor>
            </Group>
        </>
    );
}
