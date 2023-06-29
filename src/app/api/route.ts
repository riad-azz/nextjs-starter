import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = { message: "This is an example API JSON response" };
  return NextResponse.json(response);
}
