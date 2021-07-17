import { render, screen, cleanup } from "@testing-library/react";
import Modal from "./Modal";

afterEach(() => {
    cleanup();
});

test("should render a component", () => {
    render(<Modal />);
    const modalElement = screen.getByTestId("modal");
    expect(modalElement).toBeInTheDocument();
});

test("should should when open prop is true", () => {
    render(<Modal open={true} />);
    const modalElement = screen.getByTestId("modal");
    expect(modalElement).toBeInTheDocument();
});

test("should not show when open prop is false", () => {
    render(<Modal open={false} />);
    const modalElement = screen.getByTestId("modal");
    expect(modalElement.firstChild).toBe(null);
});