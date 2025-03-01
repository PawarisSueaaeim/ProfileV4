import { render, screen } from "@testing-library/react"
import Profile from "./Profile"

describe("Profile testing component", () => {
    it("Should show test results", () => {
        render(<Profile><div>Hello World</div></Profile>)

        expect(screen.getByText("Hello World")).toBeInTheDocument();
    })
})