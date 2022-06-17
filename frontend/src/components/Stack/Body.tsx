import {Card, createStyles, Spoiler, Tabs} from "@mantine/core";
import {MessageCircle, Notes} from "tabler-icons-react";
import {MarkdownDescription} from "../MarkdownDescription";
import React from "react";
import {MySkeleton} from "../MySkeleton";

type BodyProps = {
    markdown_description: string
    repo: {
        type: string
        owner: string
        name: string
    }
    isLoading?: boolean
}

const {Section} = Card;

export function Body({markdown_description, repo, isLoading = false}: BodyProps) {
    const {classes} = useStyles()

    return (<Section p={0}>
            <Tabs
                variant="outline"
                classNames={{
                    body: classes.white,
                }}
            >
                <Tabs.Tab label="Overview" icon={<Notes size={14}/>} ml="md">
                    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                        <MySkeleton height={500} visible={isLoading}>
                            <MarkdownDescription markdown={markdown_description} repo={{
                                org: repo.owner,
                                repo: repo.name,
                            }}/>
                        </MySkeleton>
                    </Spoiler>
                </Tabs.Tab>
                <Tabs.Tab label="Comments" icon={<MessageCircle size={14}/>} disabled={isLoading}>
                    Nothing here!
                </Tabs.Tab>
            </Tabs>
        </Section>
    );
}

const useStyles = createStyles((theme) => ({
    white: {
        backgroundColor: '#FFFFFF',
        padding: "20px",
    },
}));
