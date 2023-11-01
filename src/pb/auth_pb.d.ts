// package: pb
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as user_pb from "./user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SignupReq extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): SignupReq;
    getFirstname(): string;
    setFirstname(value: string): SignupReq;
    getLastname(): string;
    setLastname(value: string): SignupReq;
    getEmail(): string;
    setEmail(value: string): SignupReq;
    getGender(): string;
    setGender(value: string): SignupReq;
    getPassword(): string;
    setPassword(value: string): SignupReq;
    getPhoto(): string;
    setPhoto(value: string): SignupReq;
    getPhone(): string;
    setPhone(value: string): SignupReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignupReq.AsObject;
    static toObject(includeInstance: boolean, msg: SignupReq): SignupReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignupReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignupReq;
    static deserializeBinaryFromReader(message: SignupReq, reader: jspb.BinaryReader): SignupReq;
}

export namespace SignupReq {
    export type AsObject = {
        username: string,
        firstname: string,
        lastname: string,
        email: string,
        gender: string,
        password: string,
        photo: string,
        phone: string,
    }
}

export class Session extends jspb.Message { 
    getId(): string;
    setId(value: string): Session;
    getUserid(): string;
    setUserid(value: string): Session;
    getToken(): string;
    setToken(value: string): Session;
    getUseragent(): string;
    setUseragent(value: string): Session;
    getIp(): string;
    setIp(value: string): Session;

    hasExpiresat(): boolean;
    clearExpiresat(): void;
    getExpiresat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiresat(value?: google_protobuf_timestamp_pb.Timestamp): Session;
    getIsblocked(): boolean;
    setIsblocked(value: boolean): Session;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): Session;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): Session;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Session.AsObject;
    static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Session;
    static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
    export type AsObject = {
        id: string,
        userid: string,
        token: string,
        useragent: string,
        ip: string,
        expiresat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        isblocked: boolean,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SignupRes extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): user_pb.User | undefined;
    setUser(value?: user_pb.User): SignupRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignupRes.AsObject;
    static toObject(includeInstance: boolean, msg: SignupRes): SignupRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignupRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignupRes;
    static deserializeBinaryFromReader(message: SignupRes, reader: jspb.BinaryReader): SignupRes;
}

export namespace SignupRes {
    export type AsObject = {
        user?: user_pb.User.AsObject,
    }
}

export class LoginReq extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): LoginReq;
    getPassword(): string;
    setPassword(value: string): LoginReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginReq.AsObject;
    static toObject(includeInstance: boolean, msg: LoginReq): LoginReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginReq;
    static deserializeBinaryFromReader(message: LoginReq, reader: jspb.BinaryReader): LoginReq;
}

export namespace LoginReq {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class LoginRes extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): user_pb.User | undefined;
    setUser(value?: user_pb.User): LoginRes;

    hasSession(): boolean;
    clearSession(): void;
    getSession(): Session | undefined;
    setSession(value?: Session): LoginRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRes.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRes): LoginRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRes;
    static deserializeBinaryFromReader(message: LoginRes, reader: jspb.BinaryReader): LoginRes;
}

export namespace LoginRes {
    export type AsObject = {
        user?: user_pb.User.AsObject,
        session?: Session.AsObject,
    }
}
