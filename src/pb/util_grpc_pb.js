// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var util_pb = require('./util_pb.js');

function serialize_pb_SendEmailReq(arg) {
  if (!(arg instanceof util_pb.SendEmailReq)) {
    throw new Error('Expected argument of type pb.SendEmailReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SendEmailReq(buffer_arg) {
  return util_pb.SendEmailReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SendEmailRes(arg) {
  if (!(arg instanceof util_pb.SendEmailRes)) {
    throw new Error('Expected argument of type pb.SendEmailRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SendEmailRes(buffer_arg) {
  return util_pb.SendEmailRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var UtilServiceService = exports.UtilServiceService = {
  sendEmail: {
    path: '/pb.UtilService/SendEmail',
    requestStream: false,
    responseStream: false,
    requestType: util_pb.SendEmailReq,
    responseType: util_pb.SendEmailRes,
    requestSerialize: serialize_pb_SendEmailReq,
    requestDeserialize: deserialize_pb_SendEmailReq,
    responseSerialize: serialize_pb_SendEmailRes,
    responseDeserialize: deserialize_pb_SendEmailRes,
  },
};

exports.UtilServiceClient = grpc.makeGenericClientConstructor(UtilServiceService);
