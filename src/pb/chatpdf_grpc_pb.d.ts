// package: pb
// file: chatpdf.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as chatpdf_pb from "./chatpdf_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IChatpdfServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getContext: IChatpdfServiceService_IGetContext;
    getContextWithoutAuth: IChatpdfServiceService_IGetContextWithoutAuth;
    getChatpdfs: IChatpdfServiceService_IGetChatpdfs;
    createChatpdf: IChatpdfServiceService_ICreateChatpdf;
    deleteChatpdf: IChatpdfServiceService_IDeleteChatpdf;
    getFileUrl: IChatpdfServiceService_IGetFileUrl;
}

interface IChatpdfServiceService_IGetContext extends grpc.MethodDefinition<chatpdf_pb.GetContextReq, chatpdf_pb.GetContextRes> {
    path: "/pb.ChatpdfService/GetContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chatpdf_pb.GetContextReq>;
    requestDeserialize: grpc.deserialize<chatpdf_pb.GetContextReq>;
    responseSerialize: grpc.serialize<chatpdf_pb.GetContextRes>;
    responseDeserialize: grpc.deserialize<chatpdf_pb.GetContextRes>;
}
interface IChatpdfServiceService_IGetContextWithoutAuth extends grpc.MethodDefinition<chatpdf_pb.GetContextReq, chatpdf_pb.GetContextRes> {
    path: "/pb.ChatpdfService/GetContextWithoutAuth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chatpdf_pb.GetContextReq>;
    requestDeserialize: grpc.deserialize<chatpdf_pb.GetContextReq>;
    responseSerialize: grpc.serialize<chatpdf_pb.GetContextRes>;
    responseDeserialize: grpc.deserialize<chatpdf_pb.GetContextRes>;
}
interface IChatpdfServiceService_IGetChatpdfs extends grpc.MethodDefinition<common_pb.EmptyReq, chatpdf_pb.Chatpdf> {
    path: "/pb.ChatpdfService/GetChatpdfs";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<common_pb.EmptyReq>;
    requestDeserialize: grpc.deserialize<common_pb.EmptyReq>;
    responseSerialize: grpc.serialize<chatpdf_pb.Chatpdf>;
    responseDeserialize: grpc.deserialize<chatpdf_pb.Chatpdf>;
}
interface IChatpdfServiceService_ICreateChatpdf extends grpc.MethodDefinition<chatpdf_pb.CreateChatpdfReq, common_pb.GenericRes> {
    path: "/pb.ChatpdfService/CreateChatpdf";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chatpdf_pb.CreateChatpdfReq>;
    requestDeserialize: grpc.deserialize<chatpdf_pb.CreateChatpdfReq>;
    responseSerialize: grpc.serialize<common_pb.GenericRes>;
    responseDeserialize: grpc.deserialize<common_pb.GenericRes>;
}
interface IChatpdfServiceService_IDeleteChatpdf extends grpc.MethodDefinition<common_pb.GenericReq, common_pb.GenericRes> {
    path: "/pb.ChatpdfService/DeleteChatpdf";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.GenericReq>;
    requestDeserialize: grpc.deserialize<common_pb.GenericReq>;
    responseSerialize: grpc.serialize<common_pb.GenericRes>;
    responseDeserialize: grpc.deserialize<common_pb.GenericRes>;
}
interface IChatpdfServiceService_IGetFileUrl extends grpc.MethodDefinition<common_pb.GenericReq, common_pb.GenericRes> {
    path: "/pb.ChatpdfService/GetFileUrl";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.GenericReq>;
    requestDeserialize: grpc.deserialize<common_pb.GenericReq>;
    responseSerialize: grpc.serialize<common_pb.GenericRes>;
    responseDeserialize: grpc.deserialize<common_pb.GenericRes>;
}

export const ChatpdfServiceService: IChatpdfServiceService;

export interface IChatpdfServiceServer extends grpc.UntypedServiceImplementation {
    getContext: grpc.handleUnaryCall<chatpdf_pb.GetContextReq, chatpdf_pb.GetContextRes>;
    getContextWithoutAuth: grpc.handleUnaryCall<chatpdf_pb.GetContextReq, chatpdf_pb.GetContextRes>;
    getChatpdfs: grpc.handleServerStreamingCall<common_pb.EmptyReq, chatpdf_pb.Chatpdf>;
    createChatpdf: grpc.handleUnaryCall<chatpdf_pb.CreateChatpdfReq, common_pb.GenericRes>;
    deleteChatpdf: grpc.handleUnaryCall<common_pb.GenericReq, common_pb.GenericRes>;
    getFileUrl: grpc.handleUnaryCall<common_pb.GenericReq, common_pb.GenericRes>;
}

export interface IChatpdfServiceClient {
    getContext(request: chatpdf_pb.GetContextReq, callback: (error: grpc.ServiceError | null, response: chatpdf_pb.GetContextRes) => void): grpc.ClientUnaryCall;
    getContext(request: chatpdf_pb.GetContextReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chatpdf_pb.GetContextRes) => void): grpc.ClientUnaryCall;
    getContext(request: chatpdf_pb.GetContextReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chatpdf_pb.GetContextRes) => void): grpc.ClientUnaryCall;
    getContextWithoutAuth(request: chatpdf_pb.GetContextReq, callback: (error: grpc.ServiceError | null, response: chatpdf_pb.GetContextRes) => void): grpc.ClientUnaryCall;
    getContextWithoutAuth(request: chatpdf_pb.GetContextReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chatpdf_pb.GetContextRes) => void): grpc.ClientUnaryCall;
    getContextWithoutAuth(request: chatpdf_pb.GetContextReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chatpdf_pb.GetContextRes) => void): grpc.ClientUnaryCall;
    getChatpdfs(request: common_pb.EmptyReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chatpdf_pb.Chatpdf>;
    getChatpdfs(request: common_pb.EmptyReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chatpdf_pb.Chatpdf>;
    createChatpdf(request: chatpdf_pb.CreateChatpdfReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    createChatpdf(request: chatpdf_pb.CreateChatpdfReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    createChatpdf(request: chatpdf_pb.CreateChatpdfReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    deleteChatpdf(request: common_pb.GenericReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    deleteChatpdf(request: common_pb.GenericReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    deleteChatpdf(request: common_pb.GenericReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    getFileUrl(request: common_pb.GenericReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    getFileUrl(request: common_pb.GenericReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    getFileUrl(request: common_pb.GenericReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
}

export class ChatpdfServiceClient extends grpc.Client implements IChatpdfServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getContext(request: chatpdf_pb.GetContextReq, callback: (error: grpc.ServiceError | null, response: chatpdf_pb.GetContextRes) => void): grpc.ClientUnaryCall;
    public getContext(request: chatpdf_pb.GetContextReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chatpdf_pb.GetContextRes) => void): grpc.ClientUnaryCall;
    public getContext(request: chatpdf_pb.GetContextReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chatpdf_pb.GetContextRes) => void): grpc.ClientUnaryCall;
    public getContextWithoutAuth(request: chatpdf_pb.GetContextReq, callback: (error: grpc.ServiceError | null, response: chatpdf_pb.GetContextRes) => void): grpc.ClientUnaryCall;
    public getContextWithoutAuth(request: chatpdf_pb.GetContextReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chatpdf_pb.GetContextRes) => void): grpc.ClientUnaryCall;
    public getContextWithoutAuth(request: chatpdf_pb.GetContextReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chatpdf_pb.GetContextRes) => void): grpc.ClientUnaryCall;
    public getChatpdfs(request: common_pb.EmptyReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chatpdf_pb.Chatpdf>;
    public getChatpdfs(request: common_pb.EmptyReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chatpdf_pb.Chatpdf>;
    public createChatpdf(request: chatpdf_pb.CreateChatpdfReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public createChatpdf(request: chatpdf_pb.CreateChatpdfReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public createChatpdf(request: chatpdf_pb.CreateChatpdfReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public deleteChatpdf(request: common_pb.GenericReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public deleteChatpdf(request: common_pb.GenericReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public deleteChatpdf(request: common_pb.GenericReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public getFileUrl(request: common_pb.GenericReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public getFileUrl(request: common_pb.GenericReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public getFileUrl(request: common_pb.GenericReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
}
