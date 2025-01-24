import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
    const t = useTranslations("Homepage");

    return (
        <div>
            <ol>
                <li>{t("title1")}</li>
				<li>{t("title2")}</li>
            </ol>
        </div>
    );
}
