import {Avatar, createStyles, Group, Paper, Text, TypographyStylesProvider} from "@mantine/core";
import {Accessible} from 'tabler-icons-react';

interface CommentHtmlProps {
    postedAt: string;
    body: string;
    user: {
        name: string;
    };
}

const useStyles = createStyles((theme) => ({
    comment: {
        padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
    },

    body: {
        paddingLeft: 54,
        paddingTop: theme.spacing.sm,
        fontSize: theme.fontSizes.sm,
    },

    content: {
        '& > p:last-child': {
            marginBottom: 0,
        },
    },
}));

export function CommentHtml({postedAt, body, user}: CommentHtmlProps) {
    const {classes} = useStyles();
    return (
        <Paper withBorder radius="md" className={classes.comment}>
            <Group>
                <Avatar color="blue" radius="sm">
                    <Accessible size={24}/>
                </Avatar>
                <div>
                    <Text size="sm">{user.name}</Text>
                    <Text size="xs" color="dimmed">
                        {postedAt}
                    </Text>
                </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
                <div className={classes.content} dangerouslySetInnerHTML={{__html: body}}/>
            </TypographyStylesProvider>
        </Paper>
    );
}
