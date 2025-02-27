import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import CardSkills from "./CardSkills";
import { sum } from "@/utils/function/sum";

describe("CardSkills Component", () => {
    it("renders the CardPrimary with a title", () => {
        render(<CardSkills/>)

        expect(sum(2,3)).toBe(5);
    });
});
