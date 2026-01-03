import NotFoundInfo from "@/components/ui/not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IoT Salkaro | Dashboard",
    description: "IoT Salkaro overview dashboard",
    robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function Home() {
    return (
        <NotFoundInfo />
    );
}
