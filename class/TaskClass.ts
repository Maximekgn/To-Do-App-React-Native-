// Task.ts
export class TaskClass {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  
    constructor(id: number, title: string, description: string, completed: boolean = false) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.completed = completed;
    }
  
    markAsCompleted(): void {
      this.completed = true;
    }
  
    markAsIncomplete(): void {
      this.completed = false;
    }
  
    updateTitle(newTitle: string): void {
      this.title = newTitle;
    }
  
    updateDescription(newDescription: string): void {
      this.description = newDescription;
    }
  }
  