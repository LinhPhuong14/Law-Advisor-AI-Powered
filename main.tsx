import { MantineProvider } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ReactDOM from "react-dom/client"
import { Toaster } from "react-hot-toast"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import "@mantine/core/styles.css"
import "reactflow/dist/style.css"
import "./styles/global.css"

import { ReactFlowProvider } from "reactflow"
import Home from "./pages"
import DiagramPage from "./pages/diagram"
import DiagramLayout from "./pages/diagram/layout"
import ChatHome from "./pages/chatbot"
const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/chat",
        element: <ChatHome />,
    },
    {
        path: "/diagram",
        element: <DiagramLayout />,
        children: [
            {
                index: true,
                element: <DiagramPage />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <MantineProvider>
            <ModalsProvider>
                <ReactFlowProvider>
                    <RouterProvider router={router} />
                    <Toaster />
                </ReactFlowProvider>
            </ModalsProvider>
        </MantineProvider>
    </QueryClientProvider>
)
