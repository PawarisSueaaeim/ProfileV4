import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DownloadResume from "./DownloadResume";

describe("DownloadResume", () => {
    beforeEach(() => {
        render(<DownloadResume />);
    })
    it('renders the "Download Resume" text', () => {
        const downloadText = screen.getByText("Download Resume");
        expect(downloadText).toBeInTheDocument();
    });

    it("renders the download icon", () => {
        const downloadIcon = screen.getByTestId("download-icon");
        expect(downloadIcon).toBeInTheDocument();
    });

    it("renders the correct href for the download link", () => {
        const downloadLink = screen.getByRole("link", {
            name: /download resume/i,
        });
        expect(downloadLink).toHaveAttribute(
            "href",
            "/documents/PawarisResume.pdf",
        );
    });

    it("has the download attribute on the link", () => {
        const downloadLink = screen.getByRole("link", {
            name: /download resume/i,
        });
        expect(downloadLink).toHaveAttribute("download");
    });

    it("should apply correct styles", () => {
        const containerDiv = screen.getByRole("link", {
            name: /download resume/i,
        }).parentElement;
        expect(containerDiv).toHaveClass("flex");
        expect(containerDiv).toHaveClass("justify-between");
        expect(containerDiv).toHaveClass("items-center");
        expect(containerDiv).toHaveClass("rounded-full");
        expect(containerDiv).toHaveClass("p-2");
        expect(containerDiv).toHaveClass("gap-2");
    });
});
