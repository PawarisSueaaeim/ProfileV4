import CardPrimary from "@/common/card/CardPrimary";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
    const t = useTranslations("Homepage");

    return (
        <CardPrimary>
            <div className="grid grid-cols-1 md:grid-cols-2 dark:text-DARK_WHITE gap-4">
                <div className="flex justify-center items-center">
                    <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl">
                        <Image
                            src='/pictures/profile.jpg'
                            alt='profile'
                            height={300}
                            width={300}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <ol>
                    <li className="font-semibold text-xl">{t("name")}</li>
                    <li>{t("title")}</li>
                </ol>
            </div>
        </CardPrimary>
    );
}
