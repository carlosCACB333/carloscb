// package: pb
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class EmptyReq extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyReq.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyReq): EmptyReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyReq;
    static deserializeBinaryFromReader(message: EmptyReq, reader: jspb.BinaryReader): EmptyReq;
}

export namespace EmptyReq {
    export type AsObject = {
    }
}

export class GenericRes extends jspb.Message { 
    getStatus(): Status;
    setStatus(value: Status): GenericRes;
    getMessage(): string;
    setMessage(value: string): GenericRes;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): string | undefined;
    setValue(value: string): GenericRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenericRes.AsObject;
    static toObject(includeInstance: boolean, msg: GenericRes): GenericRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenericRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenericRes;
    static deserializeBinaryFromReader(message: GenericRes, reader: jspb.BinaryReader): GenericRes;
}

export namespace GenericRes {
    export type AsObject = {
        status: Status,
        message: string,
        value?: string,
    }
}

export class GenericReq extends jspb.Message { 
    getId(): string;
    setId(value: string): GenericReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenericReq.AsObject;
    static toObject(includeInstance: boolean, msg: GenericReq): GenericReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenericReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenericReq;
    static deserializeBinaryFromReader(message: GenericReq, reader: jspb.BinaryReader): GenericReq;
}

export namespace GenericReq {
    export type AsObject = {
        id: string,
    }
}

export enum Status {
    OK = 0,
    ERROR = 1,
}
