import React from 'react';
import {ActionIcon, Anchor, Badge, Card, Container, Group, ScrollArea, Stack, Tabs, Text, Title,} from "@mantine/core";
import {CommentHtml} from "./components/comments";
import {FileCode, MessageCircle, Photo} from "tabler-icons-react";

function App() {
    const serverless = [{
        name: "Rate My Serverless",
        repo: "github.com/magnuswahlstrand/ratemyserverless",
        description: "It is deployed using CDK.",
        comments: [
            {
                user: {
                    name: 'Magnus',
                },
                posted_at: "2022-05-11",
                body: "Well done!",
            }
        ],
        tags: ["sst", "dynamodb", "go",
            "distributed-systems",
            "sql",
            "database"]
    },
        {
            name: "Rate My Serverless 2",
            repo: "github.com/magnuswahlstrand/ratemyserverless",
            comments: [
                {
                    user: {
                        name: 'Magnus',
                    },
                    posted_at: "2022-05-11",
                    body: "Well done!",
                },
                {
                    user: {
                        name: 'Magnus',
                    },
                    posted_at: "2022-05-11",
                    body: "Well done!",
                },
            ],
            tags: ["sst", "dynamodb"]
        }
    ]
    const borderColor = "#BBB"
    return (
        <ScrollArea offsetScrollbars type="auto">
            <Container size="md" pt="xl">
                <Stack justify="flex-start" spacing="xl">
                    {serverless.map(app => {
                        const [_, org, repo] = app.repo.split("/")

                        return <Card shadow="sm" p="lg" withBorder
                                     sx={{backgroundColor: "#ECEEF0", borderColor: borderColor}}>
                            <Card.Section p="lg" sx={{backgroundColor: "#ECEEF0"}}>
                                <Title order={3}>{app.name}</Title>
                                <Group spacing="xs">
                                    <ActionIcon size="sm" variant="transparent" color="dark" mr={0}>
                                        <FileCode/>
                                    </ActionIcon>
                                    <Anchor>
                                        <Text>{org} / {repo}</Text>
                                    </Anchor>
                                </Group>


                                {app.tags.sort().map(tag => {
                                    return <Badge size="sm" ml="sm">{tag}</Badge>
                                })}
                            </Card.Section>
                            <Card.Section p={0}>
                                <Tabs variant="outline"
                                      styles={{
                                          body: {backgroundColor: "white", padding: "20px"},
                                      }}
                                >
                                    <Tabs.Tab label="Description" icon={<Photo size={14}/>} ml="md" styles={{}}>
                                        <div>
                                            {app.description}
                                            aa
                                        </div>
                                    </Tabs.Tab>
                                    <Tabs.Tab label="Comments" icon={<MessageCircle size={14}/>}>
                                        {app.comments.map(comment => {
                                            return <CommentHtml
                                                postedAt={comment.posted_at}
                                                body={comment.body}
                                                user={comment.user}/>
                                        })}
                                    </Tabs.Tab>
                                </Tabs>
                            </Card.Section>
                        </Card>
                    })}
                </Stack>
            </Container></ScrollArea>
    );
}

export default App;
