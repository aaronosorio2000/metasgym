import { CredentialsType } from "../types/CredentialsType";

interface Token {
  token: string;
}

export async function register(credentials: CredentialsType): Promise<Token> {
  const response = await fetch(`/api/signup`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  if (response.status !== 200) throw new Error();
  const token: Token = await response.json();
  return token;
}

export async function logIn(credentials: CredentialsType): Promise<Token> {
  const response = await fetch(`/api/login`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  if (response.status !== 200) throw new Error();
  const token: Token = await response.json();
  return token;
}
