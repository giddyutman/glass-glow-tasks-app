
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle } from "lucide-react";

export function TaskForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim()) {
      toast({
        title: "Error",
        description: "Task title cannot be empty",
        variant: "destructive",
      });
      return;
    }

    // Add task logic here
    toast({
      title: "Success",
      description: "Task added successfully",
    });
    setTaskTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1"
      />
      <Button type="submit">
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Task
      </Button>
    </form>
  );
}
