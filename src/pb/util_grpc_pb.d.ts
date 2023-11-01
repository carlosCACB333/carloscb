// package: pb
// file: util.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as util_pb from "./util_pb";

interface IUtilServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendEmail: IUtilServiceService_ISendEmail;
}

interface IUtilServiceService_ISendEmail extends grpc.MethodDefinition<util_pb.SendEmailReq, util_pb.SendEmailRes> {
    path: "/pb.UtilService/SendEmail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<util_pb.SendEmailReq>;
    requestDeserialize: grpc.deserialize<util_pb.SendEmailReq>;
    responseSerialize: grpc.serialize<util_pb.SendEmailRes>;
    responseDeserialize: grpc.deserialize<util_pb.SendEmailRes>;
}

export const UtilServiceService: IUtilServiceService;

export interface IUtilServiceServer extends grpc.UntypedServiceImplementation {
    sendEmail: grpc.handleUnaryCall<util_pb.SendEmailReq, util_pb.SendEmailRes>;
}

export interface IUtilServiceClient {
    sendEmail(request: util_pb.SendEmailReq, callback: (error: grpc.ServiceError | null, response: util_pb.SendEmailRes) => void): grpc.ClientUnaryCall;
    sendEmail(request: util_pb.SendEmailReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: util_pb.SendEmailRes) => void): grpc.ClientUnaryCall;
    sendEmail(request: util_pb.SendEmailReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: util_pb.SendEmailRes) => void): grpc.ClientUnaryCall;
}

export class UtilServiceClient extends grpc.Client implements IUtilServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sendEmail(request: util_pb.SendEmailReq, callback: (error: grpc.ServiceError | null, response: util_pb.SendEmailRes) => void): grpc.ClientUnaryCall;
    public sendEmail(request: util_pb.SendEmailReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: util_pb.SendEmailRes) => void): grpc.ClientUnaryCall;
    public sendEmail(request: util_pb.SendEmailReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: util_pb.SendEmailRes) => void): grpc.ClientUnaryCall;
}
