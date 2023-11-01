// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chatpdf$messages_pb = require('./chatpdf-messages_pb.js');
var common_pb = require('./common_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_pb_ChatpdfMessage(arg) {
  if (!(arg instanceof chatpdf$messages_pb.ChatpdfMessage)) {
    throw new Error('Expected argument of type pb.ChatpdfMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ChatpdfMessage(buffer_arg) {
  return chatpdf$messages_pb.ChatpdfMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CreateChatpdfMessageReq(arg) {
  if (!(arg instanceof chatpdf$messages_pb.CreateChatpdfMessageReq)) {
    throw new Error('Expected argument of type pb.CreateChatpdfMessageReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateChatpdfMessageReq(buffer_arg) {
  return chatpdf$messages_pb.CreateChatpdfMessageReq.deserializeBinary(new Uint8Array(buffer_arg));
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


var ChatpdfMessageServiceService = exports.ChatpdfMessageServiceService = {
  getLastChatpdfMessage: {
    path: '/pb.ChatpdfMessageService/GetLastChatpdfMessage',
    requestStream: false,
    responseStream: true,
    requestType: common_pb.GenericReq,
    responseType: chatpdf$messages_pb.ChatpdfMessage,
    requestSerialize: serialize_pb_GenericReq,
    requestDeserialize: deserialize_pb_GenericReq,
    responseSerialize: serialize_pb_ChatpdfMessage,
    responseDeserialize: deserialize_pb_ChatpdfMessage,
  },
  createChatpdfMessage: {
    path: '/pb.ChatpdfMessageService/CreateChatpdfMessage',
    requestStream: false,
    responseStream: false,
    requestType: chatpdf$messages_pb.CreateChatpdfMessageReq,
    responseType: common_pb.GenericRes,
    requestSerialize: serialize_pb_CreateChatpdfMessageReq,
    requestDeserialize: deserialize_pb_CreateChatpdfMessageReq,
    responseSerialize: serialize_pb_GenericRes,
    responseDeserialize: deserialize_pb_GenericRes,
  },
  delteChatpdfMessage: {
    path: '/pb.ChatpdfMessageService/DelteChatpdfMessage',
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

exports.ChatpdfMessageServiceClient = grpc.makeGenericClientConstructor(ChatpdfMessageServiceService);
