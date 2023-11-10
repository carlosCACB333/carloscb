import { ChatpdfMessageServiceClient } from "@/pb/chatpdf-messages_grpc_pb";
import { ChatpdfServiceClient } from "@/pb/chatpdf_grpc_pb";
import { UserServiceClient } from "@/pb/user_grpc_pb";
import { UtilServiceClient } from "@/pb/util_grpc_pb";
import { GRPC_URL } from "@/utils";
import { auth } from "@clerk/nextjs";
import * as grpc from "@grpc/grpc-js";

const interceptor = (
  options: grpc.InterceptorOptions,
  nextCall: grpc.NextCall
) => {
  return new grpc.InterceptingCall(nextCall(options), {
    start: async (metadata, listener, next) => {
      const token = await auth().getToken();
      metadata.add("authorization", `Bearer ${token}`);
      next(metadata, listener);
    },
  });
};

const cred = grpc.ChannelCredentials.createInsecure();

export const utilService = new UtilServiceClient(GRPC_URL, cred, {
  interceptors: [interceptor],
});

export const chatpdfService = new ChatpdfServiceClient(GRPC_URL, cred, {
  interceptors: [interceptor],
});

export const chatpdfMessageService = new ChatpdfMessageServiceClient(
  GRPC_URL,
  cred,
  {
    interceptors: [interceptor],
  }
);
export const userService = new UserServiceClient(GRPC_URL, cred, {
  interceptors: [interceptor],
});
