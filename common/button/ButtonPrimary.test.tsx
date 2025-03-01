import { fireEvent, render, screen } from "@testing-library/react"
import ButtonPrimary from "./ButtonPrimary"

describe("ButtonPrimary testing component", () => {
    const handleOnClickText = jest.fn();

    beforeEach(() => {
        render(<ButtonPrimary title="Title" onClick={handleOnClickText}/>)
    })

    it("Should have text button", () => {
        expect(screen.getByText("Title")).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button"));
        expect(handleOnClickText).toHaveBeenCalled();
    })
})