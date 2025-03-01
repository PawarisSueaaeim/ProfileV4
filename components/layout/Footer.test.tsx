import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
    beforeEach(() => {
        render(<Footer />);
    });

    it("renders the copyright text", () => {
        expect(
            screen.getByText(/Create by Pawaris Rabeab/i),
        ).toBeInTheDocument();
    });

    it("renders the version number", () => {
        expect(screen.getByText(/v0\.0\.2/i)).toBeInTheDocument();
    });

    it("should have link social media", () => {
        expect(screen.getByTestId("tel")).toHaveAttribute("href", "tel:0955799772");
        expect(screen.getByTestId("facebook")).toHaveAttribute("href", "https://www.facebook.com/pawaris.rabeab");
        expect(screen.getByTestId("instagram")).toHaveAttribute("href", "https://www.instagram.com/pawaris_rabeab/");
        expect(screen.getByTestId("linkedin")).toHaveAttribute("href", "https://www.linkedin.com/in/pleum-pawaris-rabeab-234292253/");
    })
});
