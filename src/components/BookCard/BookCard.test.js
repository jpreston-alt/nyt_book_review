import { render, screen, cleanup } from "@testing-library/react";
import BookCard from "./BookCard";

afterEach(() => {
    cleanup();
});

test("should render a card component", () => {
    render(<BookCard />);
    const bookCardEl = screen.getByTestId("bookcard");
    expect(bookCardEl).toBeInTheDocument();
    expect(bookCardEl.classList.contains('card')).toBe(true);
});

test("should render a card component with provided title", () => {
    render(<BookCard title="Harry Potter" />);
    const bookCardEl = screen.getByTestId("bookcard");
    expect(bookCardEl.firstChild.firstChild.firstChild.textContent).toBe("Harry Potter");
});
