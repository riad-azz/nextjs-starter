import { NextResponse } from "next/server";
import { makeErrorResponse, makeSuccessResponse } from "@/lib/utils";

export async function GET(request: Request) {
  try {
    const response = makeSuccessResponse({
      message: "This is an example API JSON response",
    });
    return NextResponse.json(response);
  } catch (error: any) {
    const errorResponse = makeErrorResponse(error.message);
    return NextResponse.json(errorResponse);
  }
}
