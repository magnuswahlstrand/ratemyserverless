import {Card, createStyles} from "@mantine/core";
import React from "react";
import {Footer} from "./Footer";
import {Header} from "./Header";
import {Body} from "./Body";

interface MyStack extends React.FC<{
    children: React.ReactNode
}> {
    Header: typeof Header
    // SkeletonHeader: typeof SkeletonHeader
    Body: typeof Body
    // SkeletonBody: typeof SkeletonBody
    Footer: typeof Footer
    // SkeletonFooter: typeof SkeletonFooter
}

export const Stack: MyStack = ({children,}) => {
    const {classes} = useStyles();
    return (
        <Card shadow="sm" p={0} withBorder className={classes.card}>
            {children}
        </Card>
    )
};

Stack.Header = Header;
Stack.Body = Body;
Stack.Footer = Footer;

// Stack.SkeletonHeader = SkeletonHeader;
// Stack.SkeletonBody = SkeletonBody;
// Stack.SkeletonFooter = SkeletonFooter;

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: "#ECEEF0", borderColor: "#DDD",
    },
}));
