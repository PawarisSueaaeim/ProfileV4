import TimeLine, { tTimeLineDatas } from "./TimeLine";
import { queryByText, render, screen } from "@testing-library/react";

describe("TimeLine Unit Test", () => {
    const mockDatas: tTimeLineDatas[] = [
        {
            id: "001",
            title: "Title TimeLine 1",
            date: "Project Name1, date time string",
            latest: true,
            description: "Description1",
            image: "/pictures/cmu-logo-en.png",
        },
        {
            id: "002",
            title: "Title TimeLine 2",
            date: "Project Name2, date time string",
            latest: false,
            description: "Description2",
            image: "/pictures/mungmee_logo.jpeg",
        },
    ];

    beforeEach(() => {
        render(<TimeLine timeLineDatas={mockDatas} />);
    })

    it("Should show correct images", () => {
        const imageElement = document.querySelector("img") as HTMLImageElement;
        expect(imageElement.alt).toContain(mockDatas[0].image);
    });

    it("Should show value", () => {
        mockDatas.map((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
            expect(screen.getByText(item.date)).toBeInTheDocument();
            expect(screen.getByText(item.description)).toBeInTheDocument();
            expect(screen.getByAltText(item.image)).toBeInTheDocument();
        });
    });
});
