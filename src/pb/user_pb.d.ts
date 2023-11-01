// package: pb
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getUsername(): string;
    setUsername(value: string): User;
    getFirstname(): string;
    setFirstname(value: string): User;
    getLastname(): string;
    setLastname(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getGender(): string;
    setGender(value: string): User;
    getFassword(): string;
    setFassword(value: string): User;
    getPhoto(): string;
    setPhoto(value: string): User;
    getPhone(): string;
    setPhone(value: string): User;
    getStatus(): string;
    setStatus(value: string): User;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): User;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        username: string,
        firstname: string,
        lastname: string,
        email: string,
        gender: string,
        fassword: string,
        photo: string,
        phone: string,
        status: string,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class createOrUpdateUserReq extends jspb.Message { 
    getId(): string;
    setId(value: string): createOrUpdateUserReq;
    getUsername(): string;
    setUsername(value: string): createOrUpdateUserReq;
    getFirstname(): string;
    setFirstname(value: string): createOrUpdateUserReq;
    getLastname(): string;
    setLastname(value: string): createOrUpdateUserReq;
    getPhone(): string;
    setPhone(value: string): createOrUpdateUserReq;
    getPhoto(): string;
    setPhoto(value: string): createOrUpdateUserReq;
    getGender(): string;
    setGender(value: string): createOrUpdateUserReq;
    getEmail(): string;
    setEmail(value: string): createOrUpdateUserReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): createOrUpdateUserReq.AsObject;
    static toObject(includeInstance: boolean, msg: createOrUpdateUserReq): createOrUpdateUserReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: createOrUpdateUserReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): createOrUpdateUserReq;
    static deserializeBinaryFromReader(message: createOrUpdateUserReq, reader: jspb.BinaryReader): createOrUpdateUserReq;
}

export namespace createOrUpdateUserReq {
    export type AsObject = {
        id: string,
        username: string,
        firstname: string,
        lastname: string,
        phone: string,
        photo: string,
        gender: string,
        email: string,
    }
}
