import {Card, createStyles} from "@mantine/core";
import React from "react";
import {Footer} from "./Footer";
import {Header} from "./Header";
import {Body} from "./Body";

type ServerlessStackProps = {
    name: string
    repo: string
    markdown_description: string
    tags: string[]
    updated_at: string
}

export const Stack = ({
                                    name,
                                    repo: github_repo,
                                    markdown_description,
                                    tags,
                                    updated_at
                                }: ServerlessStackProps) => {
        const [_, org, repo] = github_repo.split("/")
        const {classes} = useStyles();
        return (<Card shadow="sm" p="lg" withBorder className={classes.card}>
            <Card.Section p="lg" className={classes.headerCard}>
                <Header org={org} repo={repo} name={name}/>
            </Card.Section>
            <Card.Section p={0}>
                <Body markdown_description={markdown_description} org={org} repo={repo}/>
            </Card.Section>
            <Card.Section className={classes.footer}>
                <Footer tags={tags} updated_at={updated_at}/>
            </Card.Section>
        </Card>)
    }

;


const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: "#ECEEF0", borderColor: "#DDD",
    },
    headerCard: {
        backgroundColor: "#ECEEF0",
    },
    footer: {
        backgroundColor: '#FFFFFF',
        padding: "10px",
        fontSize: theme.fontSizes.sm,
        borderColor: theme.colors.gray[2],
        borderWidth: 1,
        borderStyle: 'solid',
    }
}));
