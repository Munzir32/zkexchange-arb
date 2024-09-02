"use client"
import React from "react"
import { isServer,
    QueryClient,
    QueryClientProvider, } from "@tanstack/react-query"

function makeQuerryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000
            }
        }
    })
}

let browsweQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
    if(isServer) {
        return makeQuerryClient()
    } else {
        if(!browsweQueryClient) browsweQueryClient = makeQuerryClient()
            return browsweQueryClient
    }
}

export default function Providers({ children }: Readonly<{children: React.ReactNode}>){
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
