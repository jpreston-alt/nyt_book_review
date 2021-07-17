import { render, screen, cleanup } from "@testing-library/react";
import Text from "./Text";

afterEach(() => {
    cleanup();
});

test("should render component", () => {
    render(<Text />);
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
});

test("if provided with children, it should render them as text content", () => {
    render(<Text>hellooooo world</Text>);
    const textElement = screen.getByTestId("text");
    expect(textElement.textContent).toBe("hellooooo world");
});

test("text size should be equal to the size of size prop", () => {
    render(<Text size="h1" />);
    const textElement = screen.getByTestId("text");
    expect(textElement.classList.contains("text--h1")).toBe(true);
});

test("text color should be based on color prop", () => {
    render(<Text color="primary" />);
    const textElement = screen.getByTestId("text");
    expect(textElement.classList.contains("text--primary")).toBe(true);
});

test("if provided with inline prop, it should render a span element", () => {
    render(<Text inline={true} />);
    const textElement = screen.getByTestId("text");
    expect(textElement instanceof HTMLSpanElement).toBe(true);
});

test("if not provided with inline prop, it should render a div element", () => {
    render(<Text />);
    const textElement = screen.getByTestId("text");
    expect(textElement instanceof HTMLDivElement).toBe(true);
});