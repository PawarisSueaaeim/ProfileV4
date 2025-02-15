import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CardSkills from "./CardSkills";
import { getTranslations } from "next-intl/server";

jest.mock("next-intl/server", () => ({
    getTranslations: jest.fn(),
}));

describe("CardSkills Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders the CardPrimary with a title", async () => {
        (getTranslations as jest.Mock).mockResolvedValue((key: string) => {
            if (key === "skills") return "SKILLS";
            return key;
        });

        render(<CardSkills />);

        const title = await screen.findByText("SKILLS");
        expect(title).toBeInTheDocument();
    });

    it("renders all skill items", async () => {
        (getTranslations as jest.Mock).mockResolvedValue(
            (key: string) => "SKILLS"
        );

        render(<CardSkills />);

        const skills = await screen.findAllByText(
            /(HTML|CSS|Javascript|Typescript|ReactJs|NextJs|Redux|MUI|TailwindCSS|Bootstrap|Postman|Jira|Figma|AdobeXD|GitHub|NodeJs)/
        );
        expect(skills.length).toBe(16); // ตรวจสอบว่ามี 16 skills เรนเดอร์ออกมา
    });

    it("renders skill icons with correct classes", async () => {
        (getTranslations as jest.Mock).mockResolvedValue(
            (key: string) => "SKILLS"
        );

        render(<CardSkills />);

        const htmlIcon = await screen.findByText("HTML");
        expect(htmlIcon.previousSibling).toHaveClass("text-orange-500");

        const cssIcon = await screen.findByText("CSS");
        expect(cssIcon.previousSibling).toHaveClass("text-blue-500");
    });
});
