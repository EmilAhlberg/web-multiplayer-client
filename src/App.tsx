import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Call from './Call'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()
const isDevelopmentEnv = process.env.NODE_ENV === 'development'

const App = (): JSX.Element => (
    <QueryClientProvider client={queryClient}>
        <div>
            <h1>Hello, Welcome to React and TypeScript</h1>
            <Call/>
        </div>
        {isDevelopmentEnv && <ReactQueryDevtools initialIsOpen />}
    </QueryClientProvider>
)

export default App
