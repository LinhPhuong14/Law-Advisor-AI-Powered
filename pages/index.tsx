import { Button } from "@/components/ui/moving-border"
import Typewriter from "typewriter-effect"
import { MantineProvider, Group } from "@mantine/core"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { AuroraBackground } from "../components/ui/aurora-background"
import { PlaceholderInput } from "../components/ui/placeholder-input"
export default function Home() {
    const placeholders = [
        "Đánh người thì bị phạt như nào?",
        "Ngồi tù bao nhiêu năm?",
        "Luật đất đai có gì thay đổi?",
        "Làm người thứ 3 có vi phạm pháp luật không",
        "Li hôn chia tài sản?",
    ]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("submitted")
    }
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative w-2/5 flex flex-col gap-4 items-center justify-center px-4"
            >
                <p className="mb-10 text-xl md:text-3xl font-bold dark:text-white text-center">
                    <Typewriter
                        options={{
                            strings: ["Ask something with LAAW-GPT"],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                        }}
                    />
                </p>

                <Button
                    as={Link}
                    to="/chat"
                    borderRadius="1.75rem"
                    className=" bg-white dark:bg-slate-900 border-neutral-200 dark:border-slate-800"
                >
                    <div className="h-full w-full">
                        <PlaceholderInput
                            placeholders={placeholders}
                            onChange={handleChange}
                            onSubmit={onSubmit}
                        />
                    </div>
                </Button>
            </motion.div>
        </AuroraBackground>
    )
}
