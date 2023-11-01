// package: pb
// file: chatpdf-messages.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as chatpdf_messages_pb from "./chatpdf-messages_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IChatpdfMessageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getLastChatpdfMessage: IChatpdfMessageServiceService_IGetLastChatpdfMessage;
    createChatpdfMessage: IChatpdfMessageServiceService_ICreateChatpdfMessage;
    delteChatpdfMessage: IChatpdfMessageServiceService_IDelteChatpdfMessage;
}

interface IChatpdfMessageServiceService_IGetLastChatpdfMessage extends grpc.MethodDefinition<common_pb.GenericReq, chatpdf_messages_pb.ChatpdfMessage> {
    path: "/pb.ChatpdfMessageService/GetLastChatpdfMessage";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<common_pb.GenericReq>;
    requestDeserialize: grpc.deserialize<common_pb.GenericReq>;
    responseSerialize: grpc.serialize<chatpdf_messages_pb.ChatpdfMessage>;
    responseDeserialize: grpc.deserialize<chatpdf_messages_pb.ChatpdfMessage>;
}
interface IChatpdfMessageServiceService_ICreateChatpdfMessage extends grpc.MethodDefinition<chatpdf_messages_pb.CreateChatpdfMessageReq, common_pb.GenericRes> {
    path: "/pb.ChatpdfMessageService/CreateChatpdfMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chatpdf_messages_pb.CreateChatpdfMessageReq>;
    requestDeserialize: grpc.deserialize<chatpdf_messages_pb.CreateChatpdfMessageReq>;
    responseSerialize: grpc.serialize<common_pb.GenericRes>;
    responseDeserialize: grpc.deserialize<common_pb.GenericRes>;
}
interface IChatpdfMessageServiceService_IDelteChatpdfMessage extends grpc.MethodDefinition<common_pb.GenericReq, common_pb.GenericRes> {
    path: "/pb.ChatpdfMessageService/DelteChatpdfMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.GenericReq>;
    requestDeserialize: grpc.deserialize<common_pb.GenericReq>;
    responseSerialize: grpc.serialize<common_pb.GenericRes>;
    responseDeserialize: grpc.deserialize<common_pb.GenericRes>;
}

export const ChatpdfMessageServiceService: IChatpdfMessageServiceService;

export interface IChatpdfMessageServiceServer extends grpc.UntypedServiceImplementation {
    getLastChatpdfMessage: grpc.handleServerStreamingCall<common_pb.GenericReq, chatpdf_messages_pb.ChatpdfMessage>;
    createChatpdfMessage: grpc.handleUnaryCall<chatpdf_messages_pb.CreateChatpdfMessageReq, common_pb.GenericRes>;
    delteChatpdfMessage: grpc.handleUnaryCall<common_pb.GenericReq, common_pb.GenericRes>;
}

export interface IChatpdfMessageServiceClient {
    getLastChatpdfMessage(request: common_pb.GenericReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chatpdf_messages_pb.ChatpdfMessage>;
    getLastChatpdfMessage(request: common_pb.GenericReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chatpdf_messages_pb.ChatpdfMessage>;
    createChatpdfMessage(request: chatpdf_messages_pb.CreateChatpdfMessageReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    createChatpdfMessage(request: chatpdf_messages_pb.CreateChatpdfMessageReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    createChatpdfMessage(request: chatpdf_messages_pb.CreateChatpdfMessageReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    delteChatpdfMessage(request: common_pb.GenericReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    delteChatpdfMessage(request: common_pb.GenericReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    delteChatpdfMessage(request: common_pb.GenericReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
}

export class ChatpdfMessageServiceClient extends grpc.Client implements IChatpdfMessageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getLastChatpdfMessage(request: common_pb.GenericReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chatpdf_messages_pb.ChatpdfMessage>;
    public getLastChatpdfMessage(request: common_pb.GenericReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chatpdf_messages_pb.ChatpdfMessage>;
    public createChatpdfMessage(request: chatpdf_messages_pb.CreateChatpdfMessageReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public createChatpdfMessage(request: chatpdf_messages_pb.CreateChatpdfMessageReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public createChatpdfMessage(request: chatpdf_messages_pb.CreateChatpdfMessageReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public delteChatpdfMessage(request: common_pb.GenericReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public delteChatpdfMessage(request: common_pb.GenericReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public delteChatpdfMessage(request: common_pb.GenericReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
}
