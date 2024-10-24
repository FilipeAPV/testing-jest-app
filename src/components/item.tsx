"use client";

import { Todo } from "@/types";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Check, Edit, Trash } from "lucide-react";

type ItemProps = {
  todo: Todo;
  onDelete: (todo: Todo) => void;
  onSaveEditing: (todo: Todo) => void;
};

export default function Item({ todo, onDelete, onSaveEditing }: ItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(todo.title);

  useEffect(() => {
    if (!isEditing) {
      setInputValue(todo.title);
    }
  }, [isEditing, todo.title]);

  const handleToggle = () => {
    onSaveEditing({ ...todo, completed: !todo.completed });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOnSaveEditing = () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    onSaveEditing({ ...todo, title: trimmedValue });
    setIsEditing(false);
  };

  return (
    <li
      className={`flex items-center p-2 border rounded ${
        todo.completed ? "bg-gray-100 text-gray-500" : ""
      }`}
    >
      {isEditing ? (
        <>
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="flex-grow mr-2"
          />
          <Button onClick={handleOnSaveEditing} size="sm">
            <Check className="h-4 w-4" />
          </Button>
        </>
      ) : (
        <>
          <Checkbox
            checked={todo.completed}
            onCheckedChange={handleToggle}
            className="mr-2"
          />
          <span className="flex-grow">{todo.title}</span>
          <Button
            onClick={handleEdit}
            variant="ghost"
            size="sm"
            className="mr-1"
            data-testid="edit-button"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            onClick={handleDelete}
            variant="ghost"
            size="sm"
            data-testid="delete-button"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </>
      )}
    </li>
  );
}
