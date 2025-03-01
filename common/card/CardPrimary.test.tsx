import { render, screen } from "@testing-library/react"
import CardPrimary from "./CardPrimary"

describe("CardPrimary testing component", () => {
    beforeEach(() => {
        render(<CardPrimary title="Title">children</CardPrimary>)
    })

    it("Should show title card style 3xl", () => {
        const containerDiv = screen.getByTestId("title");
        expect(containerDiv).toHaveTextContent("Title");
        expect(containerDiv).toHaveClass("flex justify-center items-center font-semibold text-3xl p-6");
    })

    it("Should show children text", () => {
        expect(screen.getByText("children")).toBeInTheDocument();
    })
})