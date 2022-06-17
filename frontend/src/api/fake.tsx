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
export const stacks = [
    {
        "PK": "STACK#2Aej0RvNG2dH2F2q3YYVWLSQrWI",
        "SK": "STACK#2Aej0RvNG2dH2F2q3YYVWLSQrWI",
        "created_at": "2022-06-14 21:46:50",
        "description": "# Title here",
        "repo": {
            "type": "github",
            "owner": "magnuswahlstrand",
            "name": "ratemyserverless",
        },
        "tags": ["sst", "dynamodb"],
        "updated_at": "2022-06-17 19:46:50",
        name: "Rate My Serverless 2",
    },
    {
        id: "1",
        name: "Rate My Serverless 2",
        repo: {
            type: "github",
            owner: "magnuswahlstrand",
            name: "ratemyserverless",
        },
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
        id: "2",
        name: "Rate My Serverless",
        repo: {
            type: "github",
            owner: "magnuswahlstrand",
            name: "ratemyserverless",
        },
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
