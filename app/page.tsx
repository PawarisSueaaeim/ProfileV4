import Image from "next/image";
import Profile from "@/common/uicomp/Profile";
import DownloadResume from "@/common/download/DownloadResume";
import Typing from "@/common/uicomp/Typing";
import CardSkills from "@/components/skills/CardSkills";
import { getTranslations } from "next-intl/server";

export default async function Home() {
    const t = await getTranslations("Homepage");

    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-16 md:w-3/4">
                <div className="flex justify-end items-center">
                    <Profile>
                        <Image
                            src="/pictures/profile.jpg"
                            alt="profile"
                            height={300}
                            width={300}
                            className="object-cover w-full h-full rounded-full"
                        />
                    </Profile>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <div className="w-full md:max-w-[20rem]">
                        <Typing className="font-semibold text-xl md:text-4xl" text={t("name")} delay={700}/>
                        <hr className="bg-COLOR_TERTIARY dark:bg-COLOR_PRIMARY h-1 w-16" />
                        <div className="font-semibold text-lg md:text-2xl">
                            {t("title")}
                        </div>
                        <div className="flex justify-end font-light text-sm">
                            {t("position")}
                        </div>
                        <ol className="list-disc list-inside mb-10">
                            <li>{t('descriptions1')}</li>
                            <li>{t('descriptions2')}</li>
                            <li>{t('descriptions3')}</li>
                            <li>{t('descriptions4')}</li>
                        </ol>
                        <DownloadResume />
                    </div>
                </div>
            </div>
            <CardSkills/>
        </div>
    );
}
