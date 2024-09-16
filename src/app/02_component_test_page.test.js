import { render, screen } from "@testing-library/react";
import Page from "./page";
import '@testing-library/jest-dom'

test("renders Home heading and About link", () => {
    render(<Page />);
    const heading = screen.getByText(/Home/i);
    const link = screen.getByRole("link", { name: /About/i }); // sucht nach Element, das Rolle link hat und den Text "About" enthält. getByRole ist eine Methode, die nach einem bestimmten Typ von Element sucht, in diesem Fall einem Link (<a>-Element).
    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about");
});
