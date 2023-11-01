// package: pb
// file: post.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Tag extends jspb.Message { 
    getId(): string;
    setId(value: string): Tag;
    getName(): string;
    setName(value: string): Tag;
    getIcon(): string;
    setIcon(value: string): Tag;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): Tag;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): Tag;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tag.AsObject;
    static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tag;
    static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
    export type AsObject = {
        id: string,
        name: string,
        icon: string,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Category extends jspb.Message { 
    getId(): string;
    setId(value: string): Category;
    getSlug(): string;
    setSlug(value: string): Category;
    getName(): string;
    setName(value: string): Category;
    getDetail(): string;
    setDetail(value: string): Category;
    getImg(): string;
    setImg(value: string): Category;
    getIcon(): string;
    setIcon(value: string): Category;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): Category;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): Category;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category.AsObject;
    static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category;
    static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
    export type AsObject = {
        id: string,
        slug: string,
        name: string,
        detail: string,
        img: string,
        icon: string,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Post extends jspb.Message { 
    getId(): string;
    setId(value: string): Post;
    getSlug(): string;
    setSlug(value: string): Post;
    getTitle(): string;
    setTitle(value: string): Post;
    getSummary(): string;
    setSummary(value: string): Post;
    getContent(): string;
    setContent(value: string): Post;
    getBanner(): string;
    setBanner(value: string): Post;
    getAuthorid(): string;
    setAuthorid(value: string): Post;
    getCategoryid(): string;
    setCategoryid(value: string): Post;
    clearTagsList(): void;
    getTagsList(): Array<Tag>;
    setTagsList(value: Array<Tag>): Post;
    addTags(value?: Tag, index?: number): Tag;

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): Category | undefined;
    setCategory(value?: Category): Post;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): Post;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): Post;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Post.AsObject;
    static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Post;
    static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
    export type AsObject = {
        id: string,
        slug: string,
        title: string,
        summary: string,
        content: string,
        banner: string,
        authorid: string,
        categoryid: string,
        tagsList: Array<Tag.AsObject>,
        category?: Category.AsObject,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class PostReq extends jspb.Message { 
    getId(): string;
    setId(value: string): PostReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostReq.AsObject;
    static toObject(includeInstance: boolean, msg: PostReq): PostReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostReq;
    static deserializeBinaryFromReader(message: PostReq, reader: jspb.BinaryReader): PostReq;
}

export namespace PostReq {
    export type AsObject = {
        id: string,
    }
}

export class PostRes extends jspb.Message { 

    hasPost(): boolean;
    clearPost(): void;
    getPost(): Post | undefined;
    setPost(value?: Post): PostRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostRes.AsObject;
    static toObject(includeInstance: boolean, msg: PostRes): PostRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostRes;
    static deserializeBinaryFromReader(message: PostRes, reader: jspb.BinaryReader): PostRes;
}

export namespace PostRes {
    export type AsObject = {
        post?: Post.AsObject,
    }
}

export class AddTagReq extends jspb.Message { 
    getPostid(): string;
    setPostid(value: string): AddTagReq;
    getTagid(): string;
    setTagid(value: string): AddTagReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddTagReq.AsObject;
    static toObject(includeInstance: boolean, msg: AddTagReq): AddTagReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddTagReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddTagReq;
    static deserializeBinaryFromReader(message: AddTagReq, reader: jspb.BinaryReader): AddTagReq;
}

export namespace AddTagReq {
    export type AsObject = {
        postid: string,
        tagid: string,
    }
}

export class AddTagRes extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): AddTagRes;
    getSuccess(): number;
    setSuccess(value: number): AddTagRes;
    getFailed(): number;
    setFailed(value: number): AddTagRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddTagRes.AsObject;
    static toObject(includeInstance: boolean, msg: AddTagRes): AddTagRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddTagRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddTagRes;
    static deserializeBinaryFromReader(message: AddTagRes, reader: jspb.BinaryReader): AddTagRes;
}

export namespace AddTagRes {
    export type AsObject = {
        status: string,
        success: number,
        failed: number,
    }
}
