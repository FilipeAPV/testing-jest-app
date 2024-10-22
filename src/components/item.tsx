import React from "react";

export default function Item() {
  return (
    <li
      key={todo.id}
      className={`flex items-center p-2 border rounded ${
        todo.done ? "bg-gray-100 text-gray-500" : ""
      }`}
    >
      {editingId === todo.id ? (
        <>
          <Input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow mr-2"
          />
          <Button onClick={saveEdit} size="sm">
            <Check className="h-4 w-4" />
          </Button>
        </>
      ) : (
        <>
          <Checkbox
            checked={todo.done}
            onCheckedChange={() => toggleDone(todo.id)}
            className="mr-2"
          />
          <span className="flex-grow">{todo.text}</span>
          <Button
            onClick={() => startEditing(todo.id, todo.text)}
            variant="ghost"
            size="sm"
            className="mr-1"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button onClick={() => deleteTodo(todo.id)} variant="ghost" size="sm">
            <Trash className="h-4 w-4" />
          </Button>
        </>
      )}
    </li>
  );
}
