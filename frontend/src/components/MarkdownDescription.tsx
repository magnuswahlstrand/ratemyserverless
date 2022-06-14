import React from "react";
import {Center, Code, Image, Table, Title} from "@mantine/core";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
    markdown: string;
    repo: {
        org: string;
        repo: string;
    }
}

export function MarkdownDescription({markdown, repo}: MarkdownProps) {
    const components: {
        [key: string]: React.ElementType;
    } = {
        h1: ({node: Element, ...props}) => <Title order={1} {...props} />,
        img: ({node: Element, ...props}) => {
            props.src = `https://github.com/${repo.org}/${repo.repo}/raw/HEAD/${props.src}`
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
