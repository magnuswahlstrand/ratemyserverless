import {Badge, Group} from "@mantine/core";
import React from "react";

type FooterProps = {
    tags: string[]
    updated_at: string
};

export function Footer({tags, updated_at}: FooterProps) {
    return (
        <Group position="apart">
            <Group position="right">
                {tags.sort().map(tag => {
                    return <Badge size="sm" ml="sm" radioGroup="sm">{tag}</Badge>;
                })}
            </Group>
            Last updated: {updated_at}
        </Group>

    );
}
