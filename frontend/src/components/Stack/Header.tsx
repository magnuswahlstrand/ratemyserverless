import {ActionIcon, Anchor, Card, createStyles, Group, Text, Title} from "@mantine/core";
import React from "react";
import {FileCode} from "tabler-icons-react";
import {MySkeleton} from "../MySkeleton";


type HeaderProps = {
    name: string
    repo: {
        type: string
        owner: string
        name: string
    }
    isLoading?: boolean
};

const {Section} = Card;


export function Header({name, repo, isLoading = false}: HeaderProps) {
    const {classes} = useStyles();

    return (
        <Section p="lg" className={classes.header}>
            <Group spacing="xs">
                <ActionIcon size="sm" variant="transparent" color="dark" mr={0}>
                    <FileCode/>
                </ActionIcon>
                <Anchor>
                    <MySkeleton width={200} height={24.8} visible={isLoading}>
                        <Text>{repo.owner} / {repo.name}</Text>
                    </MySkeleton>
                </Anchor>
            </Group>
        </Section>
    );
}

const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: "#ECEEF0",
    }
}));
