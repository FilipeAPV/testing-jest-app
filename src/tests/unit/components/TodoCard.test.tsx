import React from "react";
import { render, screen } from "@testing-library/react";
import TodoCard from "../../../components/todo-card";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

// Mock the UI components
jest.mock("../../../components/ui/card", () => ({
  Card: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div data-testid="card" className={className}>
      {children}
    </div>
  ),
  CardHeader: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div data-testid="card-header" className={className}>
      {children}
    </div>
  ),
  CardTitle: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <h2 data-testid="card-title" className={className}>
      {children}
    </h2>
  ),
  CardContent: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div data-testid="card-content" className={className}>
      {children}
    </div>
  ),
}));

// Mock the ClipboardList icon
jest.mock("lucide-react", () => ({
  ClipboardList: (props: any) => (
    <svg data-testid="clipboard-icon" {...props}></svg>
  ),
}));

describe("TodoCard Component", () => {
  it("renders without crashing", () => {
    render(<TodoCard>Test Content</TodoCard>);

    // Check if the Card is rendered
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("w-full max-w-md shadow-lg bg-white z-10");

    // Check if the CardHeader is rendered
    const cardHeader = screen.getByTestId("card-header");
    expect(cardHeader).toBeInTheDocument();
    expect(cardHeader).toHaveClass("bg-gray-800 text-white rounded-t-lg");

    // Check if the CardTitle is rendered with the correct text
    const cardTitle = screen.getByTestId("card-title");
    expect(cardTitle).toBeInTheDocument();
    expect(cardTitle).toHaveClass(
      "text-2xl font-semibold flex items-center justify-center"
    );
    expect(cardTitle).toHaveTextContent("Task Manager");

    // Check if the ClipboardList icon is rendered
    const clipboardIcon = screen.getByTestId("clipboard-icon");
    expect(clipboardIcon).toBeInTheDocument();
    expect(clipboardIcon).toHaveClass("mr-2 h-6 w-6");

    // Check if the children are rendered inside CardContent
    const cardContent = screen.getByTestId("card-content");
    expect(cardContent).toBeInTheDocument();
    expect(cardContent).toHaveClass(
      "max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg"
    );
    expect(cardContent).toHaveTextContent("Test Content");
  });

  it("renders correctly with different children", () => {
    const customContent = (
      <div data-testid="custom-child">Custom Child Content</div>
    );
    render(<TodoCard>{customContent}</TodoCard>);

    // Ensure the custom child is rendered
    const customChild = screen.getByTestId("custom-child");
    expect(customChild).toBeInTheDocument();
    expect(customChild).toHaveTextContent("Custom Child Content");
  });
});
