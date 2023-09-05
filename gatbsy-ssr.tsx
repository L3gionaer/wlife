import * as React from "react"
import { FC, PropsWithChildren } from "react"
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
console.log('server')
export const wrapRootElement: FC<PropsWithChildren> = ({ children }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}