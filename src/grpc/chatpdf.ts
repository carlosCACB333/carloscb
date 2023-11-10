"use server";
import { Response } from "@/interfaces";
import { chatpdfService } from "@/libs/grpc-client";
import {
  Chatpdf,
  CreateChatpdfReq,
  GetContextReq,
  GetContextRes,
} from "@/pb/chatpdf_pb";
import { EmptyReq, GenericReq, GenericRes } from "@/pb/common_pb";
import { STATUS } from "@/utils";

export const grpcGetContextWithoutAuth = async (
  chatId: string,
  query: string
): Promise<Response<GetContextRes.AsObject>> => {
  const request = new GetContextReq();
  request.setChatid(chatId);
  request.setQuery(query);
  return new Promise((resolve, reject) => {
    chatpdfService.getContextWithoutAuth(request, (err, res) => {
      if (err) {
        resolve({
          status: err.code,
          message: err.details,
        });
      } else {
        resolve({
          message: "Se obtuvo el contexto",
          status: STATUS.OK,
          data: res.toObject(),
        });
      }
    });
  });
};
export const grpcGetContext = async (
  chatId: string,
  query: string
): Promise<Response<GetContextRes.AsObject>> => {
  const request = new GetContextReq();
  request.setChatid(chatId);
  request.setQuery(query);
  return new Promise((resolve, reject) => {
    chatpdfService.getContext(request, (err, res) => {
      if (err) {
        resolve({
          status: err.code,
          message: err.details,
        });
      } else {
        resolve({
          message: "Se obtuvo el contexto",
          status: STATUS.OK,
          data: res.toObject(),
        });
      }
    });
  });
};

export const grpcCreateChatpdf = async (
  file: File
): Promise<Response<GenericRes.AsObject>> => {
  const chunk = new Uint8Array(await file.arrayBuffer());
  const req = new CreateChatpdfReq();
  req.setContenttype(file.type);
  req.setName(file.name);
  req.setChunk(chunk);
  return new Promise((resolve, reject) => {
    chatpdfService.createChatpdf(req, (err, res) => {
      if (err) {
        resolve({
          message: err.details,
          status: err.code,
        });
      } else {
        resolve({
          message: res.getMessage(),
          status: res.getStatus(),
          data: res.toObject(),
        });
      }
    });
  });
};

export const getpGetAllChatpdfs = async (): Promise<
  Response<Chatpdf.AsObject[]>
> => {
  return new Promise((resolve, reject) => {
    const req = new EmptyReq();
    const stream = chatpdfService.getChatpdfs(req);
    const chatpdfs: Chatpdf.AsObject[] = [];
    stream.on("data", (response) => {
      chatpdfs.push(response.toObject());
    });

    stream.on("error", (err) => {
      resolve({
        message: err.message,
        status: STATUS.INTERNAL,
      });
    });

    stream.on("end", () => {
      resolve({
        message: "Se obtuvieron los chatpdfs",
        status: STATUS.OK,
        data: chatpdfs,
      });
    });
  });
};

export const grpcDeleteChatpdf = async (
  id: string
): Promise<Response<GenericRes.AsObject>> => {
  return new Promise((resolve, reject) => {
    const req = new GenericReq();
    req.setId(id);
    chatpdfService.deleteChatpdf(req, (err, res) => {
      if (err) {
        resolve({
          message: err.details,
          status: err.code,
        });
      } else {
        resolve({
          message: res.getMessage(),
          status: res.getStatus(),
          data: res.toObject(),
        });
      }
    });
  });
};

export const grpcGetFileUrl = async (id: string): Promise<Response<string>> => {
  return new Promise((resolve, reject) => {
    const req = new GenericReq();
    req.setId(id);
    chatpdfService.getFileUrl(req, (err, res) => {
      if (err) {
        resolve({
          message: err.details,
          status: err.code,
        });
      } else {
        resolve({
          message: res.getMessage(),
          status: res.getStatus(),
          data: res.getValue(),
        });
      }
    });
  });
};
