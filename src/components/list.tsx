import React from "react";

type ListProps = {
  children?: React.ReactNode;
};

export default function List({ children }: ListProps) {
  return (
    <ul className="space-y-2" data-testid="todo-list">
      {children}
    </ul>
  );
}
