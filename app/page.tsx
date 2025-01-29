import ButtonPrimary from "@/common/button/ButtonPrimary";
import CardPrimary from "@/common/card/CardPrimary";
import DownloadResume from "@/components/homepage/DownloadResume";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
    const t = useTranslations("Homepage");

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 dark:text-DARK_WHITE gap-4 py-8">
            <div className="flex justify-center items-center">
                <div className="w-64 h-64 md:h-96 rounded-full overflow-hidden shadow-2xl">
                    <Image
                        src="/pictures/profile.jpg"
                        alt="profile"
                        height={300}
                        width={300}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <div className="font-semibold text-xl md:text-3xl">
                        PAWARIS RABEAB
                    </div>
                    <hr className="bg-COLOR_TERTIARY dark:bg-COLOR_PRIMARY h-1 w-16" />
                    <div className="font-semibold text-lg md:text-2xl">
                        Software Engineer
                    </div>
                    <div className="flex justify-end font-light text-sm mb-10">
                        Front-End Engineer
                    </div>
                    <DownloadResume/>
                </div>
            </div>
        </div>
    );
}
