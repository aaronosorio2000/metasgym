const url = "https://api-production-0143.up.railway.app";

export async function pedirGoals() {
  const response = await fetch(url + "/api/goals");
  const goals = await response.json();
  return goals;
}

export async function pedirGoal(id) {
  const response = await fetch(url + `/api/goals${id}`);
  const goal = await response.json();
  return goal;
}

export async function createGoal(goal) {
  const response = await fetch(url + "/api/goals", {
    method: "POST",
    body: JSON.stringify(goal),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const createdGoal = await response.json();
  console.log("Meta creada", createdGoal);
  return createdGoal;
}

export async function updateGoal(goal) {
  const response = await fetch(url + `/api/goals/${goal.id}`, {
    method: "PUT",
    body: JSON.stringify(goal),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const updatedGoal = await response.json();
  console.log("Meta actualizada", updatedGoal);
  return updatedGoal;
}

export async function borrarGoal(id) {
  await fetch(url + `/api/goals/${id}`, {
    method: "DELETE",
  });
  console.log("Meta borrada", id);
}
