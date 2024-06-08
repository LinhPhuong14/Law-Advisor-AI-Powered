import { MantineProvider, Group } from "@mantine/core"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { AuroraBackground } from "../../components/ui/aurora-background"
import { PlaceholderInput } from "../../components/ui/placeholder-input"
export default function ChatHome() {
    const placeholders = [""]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("submitted")
    }
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <p className="top-5 text-2xl sm:text-4xl font-bold absolute z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 items-center justify-center">
                LAAW-GPT
            </p>

            <div className=" w-full ">
                <div className="fixed px-4  justify-center items-center w-full bottom-5">
                    <PlaceholderInput
                        className="w-2/3"
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div>
    )
}
