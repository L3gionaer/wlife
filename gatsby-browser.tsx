import * as React from "react"
import { FC } from "react"
import { QueryClient, QueryClientProvider  } from "react-query";

const queryClient = new QueryClient();

export const wrapRootElement: FC<any> = ({ element }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {element}
        </QueryClientProvider>
    );
}