import {createStyles, Spoiler, Tabs} from "@mantine/core";
import {MessageCircle, Notes} from "tabler-icons-react";
import {MarkdownDescription} from "./MarkdownDescription";
import React from "react";

type BodyProps = {
    org: string
    repo: string
    markdown_description: string
}

export function Body({markdown_description, org, repo}: BodyProps) {
    const {classes} = useStyles()

    return <Tabs
        variant="outline"
        classNames={{
            body: classes.white,
        }}
    >
        <Tabs.Tab label="Overview" icon={<Notes size={14}/>} ml="md">
            <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                <MarkdownDescription markdown={markdown_description} repo={{
                    org: org,
                    repo: "particles",
                }}/>
            </Spoiler>
        </Tabs.Tab>
        <Tabs.Tab label="Comments" icon={<MessageCircle size={14}/>}>
            Nothing here!
        </Tabs.Tab>
    </Tabs>;
}

const useStyles = createStyles((theme) => ({
    white: {
        backgroundColor: '#FFFFFF',
        padding: "20px",
    },
}));
