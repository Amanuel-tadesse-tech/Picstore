import { type Request, type Response } from "express";
import { type User } from "../db";

export interface TrpcContext {
  user: User | null;
  req: Request;
  res: Response;
}

export async function createContext({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<TrpcContext> {
  let user: User | null = null;

  // TODO: Extract user from session/JWT

  return {
    user,
    req,
    res,
  };
}
