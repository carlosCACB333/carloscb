// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var post_pb = require('./post_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_AddTagReq(arg) {
  if (!(arg instanceof post_pb.AddTagReq)) {
    throw new Error('Expected argument of type pb.AddTagReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_AddTagReq(buffer_arg) {
  return post_pb.AddTagReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_AddTagRes(arg) {
  if (!(arg instanceof post_pb.AddTagRes)) {
    throw new Error('Expected argument of type pb.AddTagRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_AddTagRes(buffer_arg) {
  return post_pb.AddTagRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_Post(arg) {
  if (!(arg instanceof post_pb.Post)) {
    throw new Error('Expected argument of type pb.Post');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_Post(buffer_arg) {
  return post_pb.Post.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PostReq(arg) {
  if (!(arg instanceof post_pb.PostReq)) {
    throw new Error('Expected argument of type pb.PostReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PostReq(buffer_arg) {
  return post_pb.PostReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PostRes(arg) {
  if (!(arg instanceof post_pb.PostRes)) {
    throw new Error('Expected argument of type pb.PostRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PostRes(buffer_arg) {
  return post_pb.PostRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostServiceService = exports.PostServiceService = {
  create: {
    path: '/pb.PostService/Create',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.Post,
    responseType: post_pb.PostRes,
    requestSerialize: serialize_pb_Post,
    requestDeserialize: deserialize_pb_Post,
    responseSerialize: serialize_pb_PostRes,
    responseDeserialize: deserialize_pb_PostRes,
  },
  read: {
    path: '/pb.PostService/Read',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.PostReq,
    responseType: post_pb.PostRes,
    requestSerialize: serialize_pb_PostReq,
    requestDeserialize: deserialize_pb_PostReq,
    responseSerialize: serialize_pb_PostRes,
    responseDeserialize: deserialize_pb_PostRes,
  },
  update: {
    path: '/pb.PostService/Update',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.Post,
    responseType: post_pb.PostRes,
    requestSerialize: serialize_pb_Post,
    requestDeserialize: deserialize_pb_Post,
    responseSerialize: serialize_pb_PostRes,
    responseDeserialize: deserialize_pb_PostRes,
  },
  delete: {
    path: '/pb.PostService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.PostReq,
    responseType: post_pb.PostRes,
    requestSerialize: serialize_pb_PostReq,
    requestDeserialize: deserialize_pb_PostReq,
    responseSerialize: serialize_pb_PostRes,
    responseDeserialize: deserialize_pb_PostRes,
  },
  list: {
    path: '/pb.PostService/List',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: post_pb.PostRes,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_PostRes,
    responseDeserialize: deserialize_pb_PostRes,
  },
  addTag: {
    path: '/pb.PostService/AddTag',
    requestStream: true,
    responseStream: false,
    requestType: post_pb.AddTagReq,
    responseType: post_pb.AddTagRes,
    requestSerialize: serialize_pb_AddTagReq,
    requestDeserialize: deserialize_pb_AddTagReq,
    responseSerialize: serialize_pb_AddTagRes,
    responseDeserialize: deserialize_pb_AddTagRes,
  },
};

exports.PostServiceClient = grpc.makeGenericClientConstructor(PostServiceService);
