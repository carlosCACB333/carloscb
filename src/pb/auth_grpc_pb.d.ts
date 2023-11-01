// package: pb
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_pb from "./auth_pb";
import * as user_pb from "./user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signup: IAuthServiceService_ISignup;
    login: IAuthServiceService_ILogin;
}

interface IAuthServiceService_ISignup extends grpc.MethodDefinition<auth_pb.SignupReq, auth_pb.SignupRes> {
    path: "/pb.AuthService/Signup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.SignupReq>;
    requestDeserialize: grpc.deserialize<auth_pb.SignupReq>;
    responseSerialize: grpc.serialize<auth_pb.SignupRes>;
    responseDeserialize: grpc.deserialize<auth_pb.SignupRes>;
}
interface IAuthServiceService_ILogin extends grpc.MethodDefinition<auth_pb.LoginReq, auth_pb.LoginRes> {
    path: "/pb.AuthService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.LoginReq>;
    requestDeserialize: grpc.deserialize<auth_pb.LoginReq>;
    responseSerialize: grpc.serialize<auth_pb.LoginRes>;
    responseDeserialize: grpc.deserialize<auth_pb.LoginRes>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer extends grpc.UntypedServiceImplementation {
    signup: grpc.handleUnaryCall<auth_pb.SignupReq, auth_pb.SignupRes>;
    login: grpc.handleUnaryCall<auth_pb.LoginReq, auth_pb.LoginRes>;
}

export interface IAuthServiceClient {
    signup(request: auth_pb.SignupReq, callback: (error: grpc.ServiceError | null, response: auth_pb.SignupRes) => void): grpc.ClientUnaryCall;
    signup(request: auth_pb.SignupReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.SignupRes) => void): grpc.ClientUnaryCall;
    signup(request: auth_pb.SignupReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.SignupRes) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginReq, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginRes) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginRes) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginRes) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public signup(request: auth_pb.SignupReq, callback: (error: grpc.ServiceError | null, response: auth_pb.SignupRes) => void): grpc.ClientUnaryCall;
    public signup(request: auth_pb.SignupReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.SignupRes) => void): grpc.ClientUnaryCall;
    public signup(request: auth_pb.SignupReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.SignupRes) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginReq, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginRes) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginRes) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginRes) => void): grpc.ClientUnaryCall;
}
