import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

export default function TodoCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="w-full max-w-md shadow-lg bg-white z-10">
      <CardHeader className="bg-gray-800 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-semibold flex items-center justify-center">
          <ClipboardList className="mr-2 h-6 w-6" />
          Task Manager1
        </CardTitle>
      </CardHeader>
      <CardContent className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        {children}
      </CardContent>
    </Card>
  );
}
