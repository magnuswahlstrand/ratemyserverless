import {Badge, Card, createStyles, Group, Skeleton} from "@mantine/core";
import React from "react";
import {MySkeleton} from "../MySkeleton";

type FooterProps = {
    tags: string[]
    updated_at: string
    isLoading?: boolean
};


const {Section} = Card;

export function Footer({tags, updated_at, isLoading = false}: FooterProps) {

    const {classes} = useStyles();
    return (
        <Section className={classes.footer}>
            <Group position="apart">
                <Group position="right">
                    {tags.sort().map(tag => {
                        return <Badge size="sm" ml="sm" radioGroup="sm" key={tag}>
                            <MySkeleton width={40} height={18} visible={isLoading}>
                                {tag}
                            </MySkeleton>
                        </Badge>;
                    })}
                </Group>
                <MySkeleton width={200} height={18} visible={isLoading}>
                    Last updated: {updated_at}
                </MySkeleton>
            </Group>
        </Section>
    );
}


const useStyles = createStyles((theme) => ({
    footer: {
        backgroundColor: '#FFFFFF',
        padding: "10px",
        fontSize: theme.fontSizes.sm,
        borderColor: theme.colors.gray[2],
        borderWidth: 1,
        borderStyle: 'solid',
    }
}));
