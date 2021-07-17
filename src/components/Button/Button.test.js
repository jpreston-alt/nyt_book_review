import { render, screen, cleanup } from "@testing-library/react";
import Button from "./Button";

afterEach(() => {
    cleanup();
});

test("should render button component with text", () => {
    render(<Button>CLICKME</Button>);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("CLICKME");
});

test("should render a disabled button", () => {
    render(<Button disabled />);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement.classList.contains('button--disabled'));
});