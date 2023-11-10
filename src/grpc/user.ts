"use server";
import { Response } from "@/interfaces";
import { userService } from "@/libs/grpc-client";
import { GenericReq, GenericRes } from "@/pb/common_pb";
import { createOrUpdateUserReq } from "@/pb/user_pb";

export const grpcCreateOrUpdateUserWithoutAuth = async (
  req: createOrUpdateUserReq
): Promise<Response<GenericRes.AsObject>> => {
  return new Promise((resolve, reject) => {
    userService.createOrUpdateUserWithoutAuth(req, (err, res) => {
      if (err) {
        resolve({
          status: err.code,
          message: err.details,
        });
      } else {
        const data = res.toObject();
        resolve({
          message: data.message,
          status: data.status,
        });
      }
    });
  });
};

export const grpcDeleteUserWithoutAuth = async (
  id: string
): Promise<Response<GenericRes.AsObject>> => {
  return new Promise((resolve, reject) => {
    const req = new GenericReq();
    req.setId(id);
    userService.deleteUserWithoutAuth(req, (err, res) => {
      if (err) {
        resolve({
          status: err.code,
          message: err.details,
        });
      } else {
        const data = res.toObject();
        resolve({
          message: data.message,
          status: data.status,
        });
      }
    });
  });
};
