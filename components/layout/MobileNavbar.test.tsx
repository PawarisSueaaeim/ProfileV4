import { render, screen } from "@testing-library/react";
import MobileNavbar from "./MobileNavbar";
import { tNavbarDatas } from "./Navbar";

describe("MobileNavbar testing component", () => {
    const navbarDatas: tNavbarDatas[] = [
        { id: "001", title: "about", path: "/about" },
        { id: "003", title: "experience", path: "/experience" },
        { id: "003", title: "performances", path: "/performances" },
    ];
    beforeEach(() => {
        render(<MobileNavbar navbarDatas={navbarDatas} />);
    });

    it("should show menu item", () => {
        navbarDatas.map((item) => {
            expect(screen.getByRole("link", { name: item.title })).toBeInTheDocument();
        });
    });

    it("should line to path", () => {
        navbarDatas.map((item) => {
            expect(screen.getByRole("link", { name: item.title })).toHaveAttribute("href", item.path);
        });
    })
});
