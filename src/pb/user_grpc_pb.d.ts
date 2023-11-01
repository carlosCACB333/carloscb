// package: pb
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOrUpdateUserWithoutAuth: IUserServiceService_ICreateOrUpdateUserWithoutAuth;
    deleteUserWithoutAuth: IUserServiceService_IDeleteUserWithoutAuth;
}

interface IUserServiceService_ICreateOrUpdateUserWithoutAuth extends grpc.MethodDefinition<user_pb.createOrUpdateUserReq, common_pb.GenericRes> {
    path: "/pb.UserService/CreateOrUpdateUserWithoutAuth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.createOrUpdateUserReq>;
    requestDeserialize: grpc.deserialize<user_pb.createOrUpdateUserReq>;
    responseSerialize: grpc.serialize<common_pb.GenericRes>;
    responseDeserialize: grpc.deserialize<common_pb.GenericRes>;
}
interface IUserServiceService_IDeleteUserWithoutAuth extends grpc.MethodDefinition<common_pb.GenericReq, common_pb.GenericRes> {
    path: "/pb.UserService/DeleteUserWithoutAuth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.GenericReq>;
    requestDeserialize: grpc.deserialize<common_pb.GenericReq>;
    responseSerialize: grpc.serialize<common_pb.GenericRes>;
    responseDeserialize: grpc.deserialize<common_pb.GenericRes>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    createOrUpdateUserWithoutAuth: grpc.handleUnaryCall<user_pb.createOrUpdateUserReq, common_pb.GenericRes>;
    deleteUserWithoutAuth: grpc.handleUnaryCall<common_pb.GenericReq, common_pb.GenericRes>;
}

export interface IUserServiceClient {
    createOrUpdateUserWithoutAuth(request: user_pb.createOrUpdateUserReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    createOrUpdateUserWithoutAuth(request: user_pb.createOrUpdateUserReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    createOrUpdateUserWithoutAuth(request: user_pb.createOrUpdateUserReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    deleteUserWithoutAuth(request: common_pb.GenericReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    deleteUserWithoutAuth(request: common_pb.GenericReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    deleteUserWithoutAuth(request: common_pb.GenericReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createOrUpdateUserWithoutAuth(request: user_pb.createOrUpdateUserReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public createOrUpdateUserWithoutAuth(request: user_pb.createOrUpdateUserReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public createOrUpdateUserWithoutAuth(request: user_pb.createOrUpdateUserReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public deleteUserWithoutAuth(request: common_pb.GenericReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public deleteUserWithoutAuth(request: common_pb.GenericReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public deleteUserWithoutAuth(request: common_pb.GenericReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
}
