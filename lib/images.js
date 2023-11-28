import { v4 as uuidv4 } from "uuid"
import first from "@/public/images/image1.jpg"
import second from "@/public/images/image2.jpg"
import third from "@/public/images/image3.jpg"
import fourth from "@/public/images/image4.jpg"


export const images = [
    {
        id: uuidv4(),
        src: first,
        alt: "first",
    },
    {
        id: uuidv4(),
        src: second,
        alt: "second",
    },
    {
        id: uuidv4(),
        src: third,
        alt: "third",
    },
    {
        id: uuidv4(),
        src: fourth,
        alt: "fourth",
    },
]