import { GoalType } from "../types/GoalType";

export async function pedirGoals(): Promise<GoalType[]> {
  const response = await fetch("/api/goals");
  const goals: GoalType[] = await response.json();
  return goals;
}

export async function pedirGoal(id: number): Promise<GoalType> {
  const response = await fetch(`/api/goals${id}`);
  const goal: GoalType = await response.json();
  return goal;
}

export async function createGoal(goal: GoalType): Promise<GoalType> {
  const response = await fetch("/api/goals", {
    method: "POST",
    body: JSON.stringify(goal),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const createdGoal: GoalType = await response.json();
  console.log("Meta creada", createdGoal);
  return createdGoal;
}

export async function updateGoal(goal: GoalType): Promise<GoalType> {
  const response = await fetch(`/api/goals/${goal.id}`, {
    method: "PUT",
    body: JSON.stringify(goal),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const updatedGoal: GoalType = await response.json();
  console.log("Meta actualizada", updatedGoal);
  return updatedGoal;
}

export async function borrarGoal(id: number): Promise<void> {
  await fetch(`/api/goals/${id}`, {
    method: "DELETE",
  });
  console.log("Meta borrada", id);
}
