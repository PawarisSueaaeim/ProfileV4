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
});
