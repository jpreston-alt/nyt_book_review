import { render, screen, cleanup } from "@testing-library/react";
import Card from "./Card";

afterEach(() => {
    cleanup();
});

test("should render a card component", () => {
    render(<Card />);
    const cardEl = screen.getByTestId("card");
    expect(cardEl).toBeInTheDocument();
});

test("when provided with children elements, should render children", () => {
    render(<Card><div>hi i am your son</div></Card>);
    const cardEl = screen.getByTestId("card");
    expect(cardEl.firstChild.textContent).toBe("hi i am your son");
});

test("when noShadow prop is true, there should be no shadow", () => {
    render(<Card noShadow />);
    const cardEl = screen.getByTestId("card");
    expect(cardEl.classList.contains("card--noShadow")).toBe(true);
});

test("when noShadow prop is false or doesn't exist, it should default to shadow", () => {
    render(<Card />);
    const cardEl = screen.getByTestId("card");
    expect(cardEl.classList.contains("card--noShadow")).not.toBe(true);
});