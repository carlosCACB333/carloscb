// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v3.21.12
// source: chatpdf-messages.proto

package pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ChatpdfMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Content   string                 `protobuf:"bytes,2,opt,name=content,proto3" json:"content,omitempty"`
	ChatpdfID string                 `protobuf:"bytes,3,opt,name=chatpdfID,proto3" json:"chatpdfID,omitempty"`
	Role      string                 `protobuf:"bytes,4,opt,name=role,proto3" json:"role,omitempty"`
	CreatedAt *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=createdAt,proto3" json:"createdAt,omitempty"`
	UpdatedAt *timestamppb.Timestamp `protobuf:"bytes,6,opt,name=updatedAt,proto3" json:"updatedAt,omitempty"`
}

func (x *ChatpdfMessage) Reset() {
	*x = ChatpdfMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chatpdf_messages_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatpdfMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatpdfMessage) ProtoMessage() {}

func (x *ChatpdfMessage) ProtoReflect() protoreflect.Message {
	mi := &file_chatpdf_messages_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatpdfMessage.ProtoReflect.Descriptor instead.
func (*ChatpdfMessage) Descriptor() ([]byte, []int) {
	return file_chatpdf_messages_proto_rawDescGZIP(), []int{0}
}

func (x *ChatpdfMessage) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *ChatpdfMessage) GetContent() string {
	if x != nil {
		return x.Content
	}
	return ""
}

func (x *ChatpdfMessage) GetChatpdfID() string {
	if x != nil {
		return x.ChatpdfID
	}
	return ""
}

func (x *ChatpdfMessage) GetRole() string {
	if x != nil {
		return x.Role
	}
	return ""
}

func (x *ChatpdfMessage) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *ChatpdfMessage) GetUpdatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdatedAt
	}
	return nil
}

type CreateChatpdfMessageReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Content   string `protobuf:"bytes,1,opt,name=content,proto3" json:"content,omitempty"`
	ChatpdfID string `protobuf:"bytes,2,opt,name=chatpdfID,proto3" json:"chatpdfID,omitempty"`
	Role      string `protobuf:"bytes,3,opt,name=role,proto3" json:"role,omitempty"`
}

func (x *CreateChatpdfMessageReq) Reset() {
	*x = CreateChatpdfMessageReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chatpdf_messages_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateChatpdfMessageReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateChatpdfMessageReq) ProtoMessage() {}

func (x *CreateChatpdfMessageReq) ProtoReflect() protoreflect.Message {
	mi := &file_chatpdf_messages_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateChatpdfMessageReq.ProtoReflect.Descriptor instead.
func (*CreateChatpdfMessageReq) Descriptor() ([]byte, []int) {
	return file_chatpdf_messages_proto_rawDescGZIP(), []int{1}
}

func (x *CreateChatpdfMessageReq) GetContent() string {
	if x != nil {
		return x.Content
	}
	return ""
}

func (x *CreateChatpdfMessageReq) GetChatpdfID() string {
	if x != nil {
		return x.ChatpdfID
	}
	return ""
}

func (x *CreateChatpdfMessageReq) GetRole() string {
	if x != nil {
		return x.Role
	}
	return ""
}

var File_chatpdf_messages_proto protoreflect.FileDescriptor

var file_chatpdf_messages_proto_rawDesc = []byte{
	0x0a, 0x16, 0x63, 0x68, 0x61, 0x74, 0x70, 0x64, 0x66, 0x2d, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x02, 0x70, 0x62, 0x1a, 0x0c, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xe0, 0x01, 0x0a, 0x0e,
	0x43, 0x68, 0x61, 0x74, 0x70, 0x64, 0x66, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x18,
	0x0a, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x63, 0x68, 0x61, 0x74,
	0x70, 0x64, 0x66, 0x49, 0x44, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x68, 0x61,
	0x74, 0x70, 0x64, 0x66, 0x49, 0x44, 0x12, 0x12, 0x0a, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x12, 0x38, 0x0a, 0x09, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x41, 0x74, 0x12, 0x38, 0x0a, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41,
	0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x22, 0x65,
	0x0a, 0x17, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x74, 0x70, 0x64, 0x66, 0x4d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x6e,
	0x74, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x6f, 0x6e, 0x74,
	0x65, 0x6e, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x63, 0x68, 0x61, 0x74, 0x70, 0x64, 0x66, 0x49, 0x44,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x68, 0x61, 0x74, 0x70, 0x64, 0x66, 0x49,
	0x44, 0x12, 0x12, 0x0a, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x72, 0x6f, 0x6c, 0x65, 0x32, 0xd2, 0x01, 0x0a, 0x15, 0x43, 0x68, 0x61, 0x74, 0x70, 0x64,
	0x66, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x3d, 0x0a, 0x15, 0x47, 0x65, 0x74, 0x4c, 0x61, 0x73, 0x74, 0x43, 0x68, 0x61, 0x74, 0x70, 0x64,
	0x66, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x0e, 0x2e, 0x70, 0x62, 0x2e, 0x47, 0x65,
	0x6e, 0x65, 0x72, 0x69, 0x63, 0x52, 0x65, 0x71, 0x1a, 0x12, 0x2e, 0x70, 0x62, 0x2e, 0x43, 0x68,
	0x61, 0x74, 0x70, 0x64, 0x66, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x30, 0x01, 0x12, 0x43,
	0x0a, 0x14, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x74, 0x70, 0x64, 0x66, 0x4d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x1b, 0x2e, 0x70, 0x62, 0x2e, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x43, 0x68, 0x61, 0x74, 0x70, 0x64, 0x66, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x52, 0x65, 0x71, 0x1a, 0x0e, 0x2e, 0x70, 0x62, 0x2e, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x69, 0x63,
	0x52, 0x65, 0x73, 0x12, 0x35, 0x0a, 0x13, 0x44, 0x65, 0x6c, 0x74, 0x65, 0x43, 0x68, 0x61, 0x74,
	0x70, 0x64, 0x66, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x0e, 0x2e, 0x70, 0x62, 0x2e,
	0x47, 0x65, 0x6e, 0x65, 0x72, 0x69, 0x63, 0x52, 0x65, 0x71, 0x1a, 0x0e, 0x2e, 0x70, 0x62, 0x2e,
	0x47, 0x65, 0x6e, 0x65, 0x72, 0x69, 0x63, 0x52, 0x65, 0x73, 0x42, 0x25, 0x5a, 0x23, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x61, 0x72, 0x6c, 0x6f, 0x73, 0x43,
	0x41, 0x43, 0x42, 0x33, 0x33, 0x33, 0x2f, 0x63, 0x62, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x70,
	0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_chatpdf_messages_proto_rawDescOnce sync.Once
	file_chatpdf_messages_proto_rawDescData = file_chatpdf_messages_proto_rawDesc
)

func file_chatpdf_messages_proto_rawDescGZIP() []byte {
	file_chatpdf_messages_proto_rawDescOnce.Do(func() {
		file_chatpdf_messages_proto_rawDescData = protoimpl.X.CompressGZIP(file_chatpdf_messages_proto_rawDescData)
	})
	return file_chatpdf_messages_proto_rawDescData
}

var file_chatpdf_messages_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_chatpdf_messages_proto_goTypes = []interface{}{
	(*ChatpdfMessage)(nil),          // 0: pb.ChatpdfMessage
	(*CreateChatpdfMessageReq)(nil), // 1: pb.CreateChatpdfMessageReq
	(*timestamppb.Timestamp)(nil),   // 2: google.protobuf.Timestamp
	(*GenericReq)(nil),              // 3: pb.GenericReq
	(*GenericRes)(nil),              // 4: pb.GenericRes
}
var file_chatpdf_messages_proto_depIdxs = []int32{
	2, // 0: pb.ChatpdfMessage.createdAt:type_name -> google.protobuf.Timestamp
	2, // 1: pb.ChatpdfMessage.updatedAt:type_name -> google.protobuf.Timestamp
	3, // 2: pb.ChatpdfMessageService.GetLastChatpdfMessage:input_type -> pb.GenericReq
	1, // 3: pb.ChatpdfMessageService.CreateChatpdfMessage:input_type -> pb.CreateChatpdfMessageReq
	3, // 4: pb.ChatpdfMessageService.DelteChatpdfMessage:input_type -> pb.GenericReq
	0, // 5: pb.ChatpdfMessageService.GetLastChatpdfMessage:output_type -> pb.ChatpdfMessage
	4, // 6: pb.ChatpdfMessageService.CreateChatpdfMessage:output_type -> pb.GenericRes
	4, // 7: pb.ChatpdfMessageService.DelteChatpdfMessage:output_type -> pb.GenericRes
	5, // [5:8] is the sub-list for method output_type
	2, // [2:5] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_chatpdf_messages_proto_init() }
func file_chatpdf_messages_proto_init() {
	if File_chatpdf_messages_proto != nil {
		return
	}
	file_common_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_chatpdf_messages_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatpdfMessage); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chatpdf_messages_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateChatpdfMessageReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_chatpdf_messages_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_chatpdf_messages_proto_goTypes,
		DependencyIndexes: file_chatpdf_messages_proto_depIdxs,
		MessageInfos:      file_chatpdf_messages_proto_msgTypes,
	}.Build()
	File_chatpdf_messages_proto = out.File
	file_chatpdf_messages_proto_rawDesc = nil
	file_chatpdf_messages_proto_goTypes = nil
	file_chatpdf_messages_proto_depIdxs = nil
}
