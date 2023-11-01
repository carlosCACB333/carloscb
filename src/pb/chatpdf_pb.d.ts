// package: pb
// file: chatpdf.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Chatpdf extends jspb.Message { 
    getId(): string;
    setId(value: string): Chatpdf;
    getName(): string;
    setName(value: string): Chatpdf;
    getKey(): string;
    setKey(value: string): Chatpdf;
    getUserid(): string;
    setUserid(value: string): Chatpdf;
    getContenttype(): string;
    setContenttype(value: string): Chatpdf;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): Chatpdf;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): Chatpdf;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Chatpdf.AsObject;
    static toObject(includeInstance: boolean, msg: Chatpdf): Chatpdf.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Chatpdf, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Chatpdf;
    static deserializeBinaryFromReader(message: Chatpdf, reader: jspb.BinaryReader): Chatpdf;
}

export namespace Chatpdf {
    export type AsObject = {
        id: string,
        name: string,
        key: string,
        userid: string,
        contenttype: string,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetContextReq extends jspb.Message { 
    getChatid(): string;
    setChatid(value: string): GetContextReq;
    getQuery(): string;
    setQuery(value: string): GetContextReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetContextReq.AsObject;
    static toObject(includeInstance: boolean, msg: GetContextReq): GetContextReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetContextReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetContextReq;
    static deserializeBinaryFromReader(message: GetContextReq, reader: jspb.BinaryReader): GetContextReq;
}

export namespace GetContextReq {
    export type AsObject = {
        chatid: string,
        query: string,
    }
}

export class GetContextRes extends jspb.Message { 
    getContext(): string;
    setContext(value: string): GetContextRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetContextRes.AsObject;
    static toObject(includeInstance: boolean, msg: GetContextRes): GetContextRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetContextRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetContextRes;
    static deserializeBinaryFromReader(message: GetContextRes, reader: jspb.BinaryReader): GetContextRes;
}

export namespace GetContextRes {
    export type AsObject = {
        context: string,
    }
}

export class CreateChatpdfReq extends jspb.Message { 
    getChunk(): Uint8Array | string;
    getChunk_asU8(): Uint8Array;
    getChunk_asB64(): string;
    setChunk(value: Uint8Array | string): CreateChatpdfReq;
    getName(): string;
    setName(value: string): CreateChatpdfReq;
    getContenttype(): string;
    setContenttype(value: string): CreateChatpdfReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateChatpdfReq.AsObject;
    static toObject(includeInstance: boolean, msg: CreateChatpdfReq): CreateChatpdfReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateChatpdfReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateChatpdfReq;
    static deserializeBinaryFromReader(message: CreateChatpdfReq, reader: jspb.BinaryReader): CreateChatpdfReq;
}

export namespace CreateChatpdfReq {
    export type AsObject = {
        chunk: Uint8Array | string,
        name: string,
        contenttype: string,
    }
}
