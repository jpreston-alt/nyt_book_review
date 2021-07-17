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

test("when provided with a description of length greater than 50 characters, it should only render the first 50 characters followed by a ... (53 characters total)", () => {
    render(<BookCard description="A failed bank robber holds a group of strangers hostage at an apartment open house." />);
    const descriptionEl = screen.getByTestId("description");
    expect(descriptionEl.textContent.length).toBe(53);
});

test("when provided with a description of length less than 50 characters, it should render to full description", () => {
    render(<BookCard description="This is a great book." />);
    const descriptionEl = screen.getByTestId("description");
    expect(descriptionEl.textContent).toBe("This is a great book.");
});
