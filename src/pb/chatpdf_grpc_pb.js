// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chatpdf_pb = require('./chatpdf_pb.js');
var common_pb = require('./common_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_pb_Chatpdf(arg) {
  if (!(arg instanceof chatpdf_pb.Chatpdf)) {
    throw new Error('Expected argument of type pb.Chatpdf');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_Chatpdf(buffer_arg) {
  return chatpdf_pb.Chatpdf.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CreateChatpdfReq(arg) {
  if (!(arg instanceof chatpdf_pb.CreateChatpdfReq)) {
    throw new Error('Expected argument of type pb.CreateChatpdfReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateChatpdfReq(buffer_arg) {
  return chatpdf_pb.CreateChatpdfReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_EmptyReq(arg) {
  if (!(arg instanceof common_pb.EmptyReq)) {
    throw new Error('Expected argument of type pb.EmptyReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_EmptyReq(buffer_arg) {
  return common_pb.EmptyReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GenericReq(arg) {
  if (!(arg instanceof common_pb.GenericReq)) {
    throw new Error('Expected argument of type pb.GenericReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GenericReq(buffer_arg) {
  return common_pb.GenericReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GenericRes(arg) {
  if (!(arg instanceof common_pb.GenericRes)) {
    throw new Error('Expected argument of type pb.GenericRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GenericRes(buffer_arg) {
  return common_pb.GenericRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetContextReq(arg) {
  if (!(arg instanceof chatpdf_pb.GetContextReq)) {
    throw new Error('Expected argument of type pb.GetContextReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetContextReq(buffer_arg) {
  return chatpdf_pb.GetContextReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetContextRes(arg) {
  if (!(arg instanceof chatpdf_pb.GetContextRes)) {
    throw new Error('Expected argument of type pb.GetContextRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetContextRes(buffer_arg) {
  return chatpdf_pb.GetContextRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatpdfServiceService = exports.ChatpdfServiceService = {
  getContext: {
    path: '/pb.ChatpdfService/GetContext',
    requestStream: false,
    responseStream: false,
    requestType: chatpdf_pb.GetContextReq,
    responseType: chatpdf_pb.GetContextRes,
    requestSerialize: serialize_pb_GetContextReq,
    requestDeserialize: deserialize_pb_GetContextReq,
    responseSerialize: serialize_pb_GetContextRes,
    responseDeserialize: deserialize_pb_GetContextRes,
  },
  getContextWithoutAuth: {
    path: '/pb.ChatpdfService/GetContextWithoutAuth',
    requestStream: false,
    responseStream: false,
    requestType: chatpdf_pb.GetContextReq,
    responseType: chatpdf_pb.GetContextRes,
    requestSerialize: serialize_pb_GetContextReq,
    requestDeserialize: deserialize_pb_GetContextReq,
    responseSerialize: serialize_pb_GetContextRes,
    responseDeserialize: deserialize_pb_GetContextRes,
  },
  getChatpdfs: {
    path: '/pb.ChatpdfService/GetChatpdfs',
    requestStream: false,
    responseStream: true,
    requestType: common_pb.EmptyReq,
    responseType: chatpdf_pb.Chatpdf,
    requestSerialize: serialize_pb_EmptyReq,
    requestDeserialize: deserialize_pb_EmptyReq,
    responseSerialize: serialize_pb_Chatpdf,
    responseDeserialize: deserialize_pb_Chatpdf,
  },
  createChatpdf: {
    path: '/pb.ChatpdfService/CreateChatpdf',
    requestStream: false,
    responseStream: false,
    requestType: chatpdf_pb.CreateChatpdfReq,
    responseType: common_pb.GenericRes,
    requestSerialize: serialize_pb_CreateChatpdfReq,
    requestDeserialize: deserialize_pb_CreateChatpdfReq,
    responseSerialize: serialize_pb_GenericRes,
    responseDeserialize: deserialize_pb_GenericRes,
  },
  deleteChatpdf: {
    path: '/pb.ChatpdfService/DeleteChatpdf',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.GenericReq,
    responseType: common_pb.GenericRes,
    requestSerialize: serialize_pb_GenericReq,
    requestDeserialize: deserialize_pb_GenericReq,
    responseSerialize: serialize_pb_GenericRes,
    responseDeserialize: deserialize_pb_GenericRes,
  },
  getFileUrl: {
    path: '/pb.ChatpdfService/GetFileUrl',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.GenericReq,
    responseType: common_pb.GenericRes,
    requestSerialize: serialize_pb_GenericReq,
    requestDeserialize: deserialize_pb_GenericReq,
    responseSerialize: serialize_pb_GenericRes,
    responseDeserialize: deserialize_pb_GenericRes,
  },
};

exports.ChatpdfServiceClient = grpc.makeGenericClientConstructor(ChatpdfServiceService);
