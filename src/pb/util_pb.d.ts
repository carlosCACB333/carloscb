// package: pb
// file: util.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SendEmailReq extends jspb.Message { 
    clearToList(): void;
    getToList(): Array<string>;
    setToList(value: Array<string>): SendEmailReq;
    addTo(value: string, index?: number): string;
    getSubject(): string;
    setSubject(value: string): SendEmailReq;
    getBody(): string;
    setBody(value: string): SendEmailReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendEmailReq.AsObject;
    static toObject(includeInstance: boolean, msg: SendEmailReq): SendEmailReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendEmailReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendEmailReq;
    static deserializeBinaryFromReader(message: SendEmailReq, reader: jspb.BinaryReader): SendEmailReq;
}

export namespace SendEmailReq {
    export type AsObject = {
        toList: Array<string>,
        subject: string,
        body: string,
    }
}

export class SendEmailRes extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): SendEmailRes;
    getMessage(): string;
    setMessage(value: string): SendEmailRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendEmailRes.AsObject;
    static toObject(includeInstance: boolean, msg: SendEmailRes): SendEmailRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendEmailRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendEmailRes;
    static deserializeBinaryFromReader(message: SendEmailRes, reader: jspb.BinaryReader): SendEmailRes;
}

export namespace SendEmailRes {
    export type AsObject = {
        status: string,
        message: string,
    }
}
