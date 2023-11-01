// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');
var user_pb = require('./user_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_pb_LoginReq(arg) {
  if (!(arg instanceof auth_pb.LoginReq)) {
    throw new Error('Expected argument of type pb.LoginReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_LoginReq(buffer_arg) {
  return auth_pb.LoginReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_LoginRes(arg) {
  if (!(arg instanceof auth_pb.LoginRes)) {
    throw new Error('Expected argument of type pb.LoginRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_LoginRes(buffer_arg) {
  return auth_pb.LoginRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SignupReq(arg) {
  if (!(arg instanceof auth_pb.SignupReq)) {
    throw new Error('Expected argument of type pb.SignupReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SignupReq(buffer_arg) {
  return auth_pb.SignupReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SignupRes(arg) {
  if (!(arg instanceof auth_pb.SignupRes)) {
    throw new Error('Expected argument of type pb.SignupRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SignupRes(buffer_arg) {
  return auth_pb.SignupRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  signup: {
    path: '/pb.AuthService/Signup',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SignupReq,
    responseType: auth_pb.SignupRes,
    requestSerialize: serialize_pb_SignupReq,
    requestDeserialize: deserialize_pb_SignupReq,
    responseSerialize: serialize_pb_SignupRes,
    responseDeserialize: deserialize_pb_SignupRes,
  },
  login: {
    path: '/pb.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginReq,
    responseType: auth_pb.LoginRes,
    requestSerialize: serialize_pb_LoginReq,
    requestDeserialize: deserialize_pb_LoginReq,
    responseSerialize: serialize_pb_LoginRes,
    responseDeserialize: deserialize_pb_LoginRes,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
