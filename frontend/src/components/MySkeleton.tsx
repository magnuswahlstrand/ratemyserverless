import {Skeleton, SkeletonProps} from "@mantine/core";
import React from "react";

interface FooProps extends SkeletonProps {
    children: React.ReactNode
}

export function MySkeleton(props: FooProps) {
    if (props.visible) {
        return <Skeleton {...props}>
            {props.children}
        </Skeleton>
    }

    return (<>{props.children}</>)
}
