// package: pb
// file: post.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as post_pb from "./post_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IPostServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IPostServiceService_ICreate;
    read: IPostServiceService_IRead;
    update: IPostServiceService_IUpdate;
    delete: IPostServiceService_IDelete;
    list: IPostServiceService_IList;
    addTag: IPostServiceService_IAddTag;
}

interface IPostServiceService_ICreate extends grpc.MethodDefinition<post_pb.Post, post_pb.PostRes> {
    path: "/pb.PostService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.Post>;
    requestDeserialize: grpc.deserialize<post_pb.Post>;
    responseSerialize: grpc.serialize<post_pb.PostRes>;
    responseDeserialize: grpc.deserialize<post_pb.PostRes>;
}
interface IPostServiceService_IRead extends grpc.MethodDefinition<post_pb.PostReq, post_pb.PostRes> {
    path: "/pb.PostService/Read";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.PostReq>;
    requestDeserialize: grpc.deserialize<post_pb.PostReq>;
    responseSerialize: grpc.serialize<post_pb.PostRes>;
    responseDeserialize: grpc.deserialize<post_pb.PostRes>;
}
interface IPostServiceService_IUpdate extends grpc.MethodDefinition<post_pb.Post, post_pb.PostRes> {
    path: "/pb.PostService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.Post>;
    requestDeserialize: grpc.deserialize<post_pb.Post>;
    responseSerialize: grpc.serialize<post_pb.PostRes>;
    responseDeserialize: grpc.deserialize<post_pb.PostRes>;
}
interface IPostServiceService_IDelete extends grpc.MethodDefinition<post_pb.PostReq, post_pb.PostRes> {
    path: "/pb.PostService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.PostReq>;
    requestDeserialize: grpc.deserialize<post_pb.PostReq>;
    responseSerialize: grpc.serialize<post_pb.PostRes>;
    responseDeserialize: grpc.deserialize<post_pb.PostRes>;
}
interface IPostServiceService_IList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, post_pb.PostRes> {
    path: "/pb.PostService/List";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<post_pb.PostRes>;
    responseDeserialize: grpc.deserialize<post_pb.PostRes>;
}
interface IPostServiceService_IAddTag extends grpc.MethodDefinition<post_pb.AddTagReq, post_pb.AddTagRes> {
    path: "/pb.PostService/AddTag";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.AddTagReq>;
    requestDeserialize: grpc.deserialize<post_pb.AddTagReq>;
    responseSerialize: grpc.serialize<post_pb.AddTagRes>;
    responseDeserialize: grpc.deserialize<post_pb.AddTagRes>;
}

export const PostServiceService: IPostServiceService;

export interface IPostServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<post_pb.Post, post_pb.PostRes>;
    read: grpc.handleUnaryCall<post_pb.PostReq, post_pb.PostRes>;
    update: grpc.handleUnaryCall<post_pb.Post, post_pb.PostRes>;
    delete: grpc.handleUnaryCall<post_pb.PostReq, post_pb.PostRes>;
    list: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, post_pb.PostRes>;
    addTag: grpc.handleClientStreamingCall<post_pb.AddTagReq, post_pb.AddTagRes>;
}

export interface IPostServiceClient {
    create(request: post_pb.Post, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    create(request: post_pb.Post, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    create(request: post_pb.Post, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    read(request: post_pb.PostReq, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    read(request: post_pb.PostReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    read(request: post_pb.PostReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    update(request: post_pb.Post, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    update(request: post_pb.Post, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    update(request: post_pb.Post, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    delete(request: post_pb.PostReq, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    delete(request: post_pb.PostReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    delete(request: post_pb.PostReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    list(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<post_pb.PostRes>;
    list(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<post_pb.PostRes>;
    addTag(callback: (error: grpc.ServiceError | null, response: post_pb.AddTagRes) => void): grpc.ClientWritableStream<post_pb.AddTagReq>;
    addTag(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.AddTagRes) => void): grpc.ClientWritableStream<post_pb.AddTagReq>;
    addTag(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.AddTagRes) => void): grpc.ClientWritableStream<post_pb.AddTagReq>;
    addTag(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.AddTagRes) => void): grpc.ClientWritableStream<post_pb.AddTagReq>;
}

export class PostServiceClient extends grpc.Client implements IPostServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: post_pb.Post, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    public create(request: post_pb.Post, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    public create(request: post_pb.Post, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    public read(request: post_pb.PostReq, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    public read(request: post_pb.PostReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    public read(request: post_pb.PostReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    public update(request: post_pb.Post, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    public update(request: post_pb.Post, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    public update(request: post_pb.Post, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    public delete(request: post_pb.PostReq, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    public delete(request: post_pb.PostReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    public delete(request: post_pb.PostReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostRes) => void): grpc.ClientUnaryCall;
    public list(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<post_pb.PostRes>;
    public list(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<post_pb.PostRes>;
    public addTag(callback: (error: grpc.ServiceError | null, response: post_pb.AddTagRes) => void): grpc.ClientWritableStream<post_pb.AddTagReq>;
    public addTag(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.AddTagRes) => void): grpc.ClientWritableStream<post_pb.AddTagReq>;
    public addTag(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.AddTagRes) => void): grpc.ClientWritableStream<post_pb.AddTagReq>;
    public addTag(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.AddTagRes) => void): grpc.ClientWritableStream<post_pb.AddTagReq>;
}
