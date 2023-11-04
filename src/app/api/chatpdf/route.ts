import { NextRequest, NextResponse } from "next/server";
import { STATUS, X_API_KEY, } from "@/utils";
import { grpcCreateChatpdf } from "@/grpc/chatpdf";
import * as grpc from "@grpc/grpc-js";

export async function POST(req: NextRequest) {

  try {
    const apiKey = req.headers.get("x-api-key");
    if (apiKey != X_API_KEY) {
      return NextResponse.json({
        status: STATUS.PERMISSION_DENIED,
        error: "No tienes permiso para acceder a este recurso"
      }, { status: 401 });
    }
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json({
        status: STATUS.INVALID_ARGUMENT,
        message: "No se ha enviado el archivo",
      }, { status: 400 });
    }

    const res = await grpcCreateChatpdf(file);
    return NextResponse.json({
      ...res,
    });
  } catch (error) {
    const e = error as grpc.ServiceError;
    return NextResponse.json({
      status: e.code,
      message: e.details,
    }, { status: 500 });
  }
}
