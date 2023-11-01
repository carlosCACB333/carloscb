// package: pb
// file: chatpdf-messages.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ChatpdfMessage extends jspb.Message { 
    getId(): string;
    setId(value: string): ChatpdfMessage;
    getContent(): string;
    setContent(value: string): ChatpdfMessage;
    getChatpdfid(): string;
    setChatpdfid(value: string): ChatpdfMessage;
    getRole(): string;
    setRole(value: string): ChatpdfMessage;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): ChatpdfMessage;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): ChatpdfMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChatpdfMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ChatpdfMessage): ChatpdfMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChatpdfMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChatpdfMessage;
    static deserializeBinaryFromReader(message: ChatpdfMessage, reader: jspb.BinaryReader): ChatpdfMessage;
}

export namespace ChatpdfMessage {
    export type AsObject = {
        id: string,
        content: string,
        chatpdfid: string,
        role: string,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateChatpdfMessageReq extends jspb.Message { 
    getContent(): string;
    setContent(value: string): CreateChatpdfMessageReq;
    getChatpdfid(): string;
    setChatpdfid(value: string): CreateChatpdfMessageReq;
    getRole(): string;
    setRole(value: string): CreateChatpdfMessageReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateChatpdfMessageReq.AsObject;
    static toObject(includeInstance: boolean, msg: CreateChatpdfMessageReq): CreateChatpdfMessageReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateChatpdfMessageReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateChatpdfMessageReq;
    static deserializeBinaryFromReader(message: CreateChatpdfMessageReq, reader: jspb.BinaryReader): CreateChatpdfMessageReq;
}

export namespace CreateChatpdfMessageReq {
    export type AsObject = {
        content: string,
        chatpdfid: string,
        role: string,
    }
}
