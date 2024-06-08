import { Button, CopyButton, Modal } from "@mantine/core"
import { ReactNode } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

interface ModalCodeProps extends React.HTMLProps<HTMLDivElement> {
    children?: ReactNode
    title: string
    modalSize?: number | string
    data?: string
    opened: boolean
    fileName: string
    language?: string
    handler: { open: () => void; close: () => void }
}

export const ModalCode = ({
    className,
    children,
    opened,
    handler,
    title,
    modalSize = "100%",
    data,
    language,
    fileName,
    ...props
}: ModalCodeProps) => {
    const exportToFile = () => {
        const blob = new Blob([data], { type: "text/plain;charset=utf-8" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }
    return (
        <>
            <Modal
                opened={opened}
                onClose={handler.close}
                withCloseButton={false}
                size={modalSize}
            >
                <Modal.Header>
                    <div className="w-full">
                        <div className="flex justify-center">
                            <b>{title}</b>
                        </div>
                        <div className="flex gap-2  sticky top-0">
                            <CopyButton value={data}>
                                {({ copied, copy }) => (
                                    <Button
                                        variant="light"
                                        onClick={copy}
                                        disabled={data === "" || !data}
                                    >
                                        {copied
                                            ? "Copied to clipboard"
                                            : "Copy to clipboard"}
                                    </Button>
                                )}
                            </CopyButton>
                            <Button
                                disabled={data === "" || !data}
                                variant="light"
                                onClick={exportToFile}
                            >
                                Export to file
                            </Button>
                        </div>
                    </div>
                </Modal.Header>
                <SyntaxHighlighter
                    language={language}
                    wrapLines
                    lineProps={{
                        style: {
                            wordBreak: "break-all",
                            whiteSpace: "pre-wrap",
                        },
                    }}
                >
                    {data}
                </SyntaxHighlighter>
            </Modal>
        </>
    )
}
