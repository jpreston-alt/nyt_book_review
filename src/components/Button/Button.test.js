import { render, screen, cleanup } from "@testing-library/react";
import Button from "./Button";

// test("test", () => {
//     expect(true).toBe(true);
// })
// set act assertion

afterEach(() => {
    cleanup();
});

test("should render button component with text", () => {
    render(<Button>CLICKME</Button>);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("CLICKME");
});