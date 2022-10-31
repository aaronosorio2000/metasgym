export async function pedirGoals() {
  const response = await fetch("/goals.json");
  const goals = await response.json();
  return goals;
}

export async function pedirGoal() {
  const response = await fetch("/goal.json");
  const goal = await response.json();
  return goal;
}

export async function createGoal() {
  const response = await fetch("/goal.json");
  const createdGoal = await response.json();
  console.log("Meta creada", createdGoal);
  return createdGoal;
}

export async function updateGoal() {
  const response = await fetch("/goal.json");
  const updatedGoal = await response.json();
  console.log("Meta actualizada", updatedGoal);
  return updatedGoal;
}

export async function borrarGoal() {
  const response = await fetch("/goal.json");
  const goalBorrada = await response.json();
  console.log("Meta borrada", goalBorrada.id);
  return goalBorrada.id;
}
