import { render, screen, cleanup } from "@testing-library/react";
import Spacer from "./Spacer";

afterEach(() => {
    cleanup();
});

test("should render component", () => {
    render(<Spacer />);
    const spacerElement = screen.getByTestId("spacer");
    expect(spacerElement).toBeInTheDocument();
});

test("should provide padding equal to value prop", () => {
    render(<Spacer value={20} />);
    const spacerElement = screen.getByTestId("spacer");
    expect(spacerElement).toHaveStyle("padding-top: 20px");
});