import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("should render initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("should add a todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText("Add new todo"), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("should toggle todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("should delete a todo", () => {
    render(<TodoList />);
    fireEvent.click(screen.getAllByText("Delete")[0]);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
