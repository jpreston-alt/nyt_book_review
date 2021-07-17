import { render, screen, cleanup } from "@testing-library/react";
import SelectInput from "./SelectInput";

afterEach(() => {
    cleanup();
});

test("should render select input component", () => {
    render(<SelectInput />);
    const selectElement = screen.getByTestId("select-input");
    expect(selectElement).toBeInTheDocument();
});
