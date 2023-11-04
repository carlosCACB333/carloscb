// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.12
// source: chatpdf-messages.proto

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	ChatpdfMessageService_GetLastChatpdfMessage_FullMethodName = "/pb.ChatpdfMessageService/GetLastChatpdfMessage"
	ChatpdfMessageService_CreateChatpdfMessage_FullMethodName  = "/pb.ChatpdfMessageService/CreateChatpdfMessage"
	ChatpdfMessageService_ClearChatpdfMessage_FullMethodName   = "/pb.ChatpdfMessageService/ClearChatpdfMessage"
)

// ChatpdfMessageServiceClient is the client API for ChatpdfMessageService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ChatpdfMessageServiceClient interface {
	GetLastChatpdfMessage(ctx context.Context, in *GenericReq, opts ...grpc.CallOption) (ChatpdfMessageService_GetLastChatpdfMessageClient, error)
	CreateChatpdfMessage(ctx context.Context, in *CreateChatpdfMessageReq, opts ...grpc.CallOption) (*GenericRes, error)
	ClearChatpdfMessage(ctx context.Context, in *GenericReq, opts ...grpc.CallOption) (*GenericRes, error)
}

type chatpdfMessageServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewChatpdfMessageServiceClient(cc grpc.ClientConnInterface) ChatpdfMessageServiceClient {
	return &chatpdfMessageServiceClient{cc}
}

func (c *chatpdfMessageServiceClient) GetLastChatpdfMessage(ctx context.Context, in *GenericReq, opts ...grpc.CallOption) (ChatpdfMessageService_GetLastChatpdfMessageClient, error) {
	stream, err := c.cc.NewStream(ctx, &ChatpdfMessageService_ServiceDesc.Streams[0], ChatpdfMessageService_GetLastChatpdfMessage_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &chatpdfMessageServiceGetLastChatpdfMessageClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ChatpdfMessageService_GetLastChatpdfMessageClient interface {
	Recv() (*ChatpdfMessage, error)
	grpc.ClientStream
}

type chatpdfMessageServiceGetLastChatpdfMessageClient struct {
	grpc.ClientStream
}

func (x *chatpdfMessageServiceGetLastChatpdfMessageClient) Recv() (*ChatpdfMessage, error) {
	m := new(ChatpdfMessage)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *chatpdfMessageServiceClient) CreateChatpdfMessage(ctx context.Context, in *CreateChatpdfMessageReq, opts ...grpc.CallOption) (*GenericRes, error) {
	out := new(GenericRes)
	err := c.cc.Invoke(ctx, ChatpdfMessageService_CreateChatpdfMessage_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *chatpdfMessageServiceClient) ClearChatpdfMessage(ctx context.Context, in *GenericReq, opts ...grpc.CallOption) (*GenericRes, error) {
	out := new(GenericRes)
	err := c.cc.Invoke(ctx, ChatpdfMessageService_ClearChatpdfMessage_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ChatpdfMessageServiceServer is the server API for ChatpdfMessageService service.
// All implementations must embed UnimplementedChatpdfMessageServiceServer
// for forward compatibility
type ChatpdfMessageServiceServer interface {
	GetLastChatpdfMessage(*GenericReq, ChatpdfMessageService_GetLastChatpdfMessageServer) error
	CreateChatpdfMessage(context.Context, *CreateChatpdfMessageReq) (*GenericRes, error)
	ClearChatpdfMessage(context.Context, *GenericReq) (*GenericRes, error)
	mustEmbedUnimplementedChatpdfMessageServiceServer()
}

// UnimplementedChatpdfMessageServiceServer must be embedded to have forward compatible implementations.
type UnimplementedChatpdfMessageServiceServer struct {
}

func (UnimplementedChatpdfMessageServiceServer) GetLastChatpdfMessage(*GenericReq, ChatpdfMessageService_GetLastChatpdfMessageServer) error {
	return status.Errorf(codes.Unimplemented, "method GetLastChatpdfMessage not implemented")
}
func (UnimplementedChatpdfMessageServiceServer) CreateChatpdfMessage(context.Context, *CreateChatpdfMessageReq) (*GenericRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateChatpdfMessage not implemented")
}
func (UnimplementedChatpdfMessageServiceServer) ClearChatpdfMessage(context.Context, *GenericReq) (*GenericRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ClearChatpdfMessage not implemented")
}
func (UnimplementedChatpdfMessageServiceServer) mustEmbedUnimplementedChatpdfMessageServiceServer() {}

// UnsafeChatpdfMessageServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ChatpdfMessageServiceServer will
// result in compilation errors.
type UnsafeChatpdfMessageServiceServer interface {
	mustEmbedUnimplementedChatpdfMessageServiceServer()
}

func RegisterChatpdfMessageServiceServer(s grpc.ServiceRegistrar, srv ChatpdfMessageServiceServer) {
	s.RegisterService(&ChatpdfMessageService_ServiceDesc, srv)
}

func _ChatpdfMessageService_GetLastChatpdfMessage_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GenericReq)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ChatpdfMessageServiceServer).GetLastChatpdfMessage(m, &chatpdfMessageServiceGetLastChatpdfMessageServer{stream})
}

type ChatpdfMessageService_GetLastChatpdfMessageServer interface {
	Send(*ChatpdfMessage) error
	grpc.ServerStream
}

type chatpdfMessageServiceGetLastChatpdfMessageServer struct {
	grpc.ServerStream
}

func (x *chatpdfMessageServiceGetLastChatpdfMessageServer) Send(m *ChatpdfMessage) error {
	return x.ServerStream.SendMsg(m)
}

func _ChatpdfMessageService_CreateChatpdfMessage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateChatpdfMessageReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChatpdfMessageServiceServer).CreateChatpdfMessage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ChatpdfMessageService_CreateChatpdfMessage_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChatpdfMessageServiceServer).CreateChatpdfMessage(ctx, req.(*CreateChatpdfMessageReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ChatpdfMessageService_ClearChatpdfMessage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GenericReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChatpdfMessageServiceServer).ClearChatpdfMessage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ChatpdfMessageService_ClearChatpdfMessage_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChatpdfMessageServiceServer).ClearChatpdfMessage(ctx, req.(*GenericReq))
	}
	return interceptor(ctx, in, info, handler)
}

// ChatpdfMessageService_ServiceDesc is the grpc.ServiceDesc for ChatpdfMessageService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ChatpdfMessageService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pb.ChatpdfMessageService",
	HandlerType: (*ChatpdfMessageServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateChatpdfMessage",
			Handler:    _ChatpdfMessageService_CreateChatpdfMessage_Handler,
		},
		{
			MethodName: "ClearChatpdfMessage",
			Handler:    _ChatpdfMessageService_ClearChatpdfMessage_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetLastChatpdfMessage",
			Handler:       _ChatpdfMessageService_GetLastChatpdfMessage_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "chatpdf-messages.proto",
}
