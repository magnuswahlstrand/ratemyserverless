import React from 'react';
import {
    ActionIcon,
    Anchor,
    Badge,
    Card,
    Center,
    Code,
    Container,
    createStyles,
    Group,
    Image,
    Spoiler,
    Stack,
    Table,
    Tabs,
    Text,
    Title,
} from "@mantine/core";
import {CommentHtml} from "./components/comments";
import {FileCode, MessageCircle, Notes, Vocabulary} from "tabler-icons-react";


import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const useStyles = createStyles((theme) => ({
    white: {
        backgroundColor: '#FFFFFF',
        padding: "10px",
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

type MarkdownProps = {
    markdown: string;
    repo: {
        org: string;
        repo: string;
        branch: string;
    }
}


function MarkdownDescription({markdown, repo}: MarkdownProps) {
    const components: {
        [key: string]: React.ElementType;
    } = {
        h1: ({node: Element, ...props}) => <Title order={1} {...props} />,
        img: ({node: Element, ...props}) => {
            props.src = `https://github.com/${repo.org}/${repo.repo}/raw/${repo.branch}/${props.src}`
            return (
                <Center>
                    <Image width={600} {...props} />
                </Center>
            )
        },
        code: ({node: Element, ...props}) => <Code block {...props}/>,
        table: ({node, ...props}) => <Table {...props} verticalSpacing="xs" fontSize="xs" striped highlightOnHover/>
    }
    // https://github.com/master/particles/raw/master/docs/particles_distance.gif
    // https://github.com/magnuswahlstrand/particles/raw/master/docs/particles_example.gif


    return (<ReactMarkdown
        components={components}
        remarkPlugins={[remarkGfm]}>{markdown}
    </ReactMarkdown>)
}

const markdown_description = `A paragraph with *emphasis* and **strong importance**.

# Hej

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

[//]: # (Title: Marketing Meeting Notes)  


### Single-table design

My stack uses a single DynamoDB table for all data.  

| Entity | PK | SK | Comment |
| - | - | - | - |
| Stack | STACK#<StackId> | STACK#<StackId> | | 
| Comment | STACK#<StackId> | COMMENT#<CommentId> | | 
| Category | - | - | Denormalized in Stack |

    This ~is not~ strikethrough, but ~~this is~~!

`

const markdown_description_2 = `# Particles
A particle system package for the 2D library [ebiten](https://github.com/hajimehoshi/ebiten).

## Examples

\`\`\`
go run examples/editor/*.go
\`\`\`

![example](docs/particles_distance.gif)
`

function App() {
    const {classes} = useStyles();


    const serverless = [
        {
            name: "Rate My Serverless 2",
            repo: "github.com/magnuswahlstrand/ratemyserverless",
            markdown_description: markdown_description_2,
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
            tags: ["sst", "dynamodb"],
            updated_at: "2022-05-11",
        },
        {
            name: "Rate My Serverless",
            repo: "github.com/magnuswahlstrand/ratemyserverless",
            markdown_description: markdown_description,
            description: "This website!",
            comments: [
                {
                    user: {
                        name: 'Magnus',
                    },
                    posted_at: "2022-05-11",
                    body: "Well done!",
                }
            ],
            tags: ["sst", "dynamodb", "cdk",
                "distributed-systems"],
            updated_at: "2022-05-11",
        }
    ]

    const borderColor = "#DDD"

    return (
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


                        </Card.Section>
                        <Card.Section p={0}>
                            <Tabs variant="outline"
                                  styles={{
                                      body: {backgroundColor: "white", padding: "20px"},
                                  }}
                            >
                                <Tabs.Tab label="Overview" icon={<Notes size={14}/>} ml="md">
                                    <MarkdownDescription markdown={app.markdown_description} repo={{
                                        org: org,
                                        repo: "particles",
                                        branch: "master",
                                    }}/>
                                </Tabs.Tab>
                                <Tabs.Tab label="Architecture" icon={<Vocabulary size={14}/>} ml="md">
                                    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                                        <MarkdownDescription markdown={app.markdown_description} repo={{
                                            org: org,
                                            repo: "particles",
                                            branch: "master",
                                        }}/>
                                    </Spoiler>

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
                        <Card.Section className={classes.white}>
                        </Card.Section>
                        <Card.Section className={classes.footer}>
                            <Group position="apart">
                                <Group position="right">
                                    {app.tags.sort().map(tag => {
                                        return <Badge size="sm" ml="sm" radioGroup="sm">#{tag}</Badge>
                                    })}
                                </Group>
                                Last updated: {app.updated_at}
                            </Group>


                        </Card.Section>
                    </Card>
                })}
            </Stack>
        </Container>
    );
}

export default App;
