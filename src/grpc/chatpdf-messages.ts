"use server"

import { GPTRole, Response } from "@/interfaces";
import { chatpdfMessageService } from "@/libs/grpc-client";
import { ChatpdfMessage, CreateChatpdfMessageReq } from "@/pb/chatpdf-messages_pb";
import { GenericReq, GenericRes } from "@/pb/common_pb";
import { STATUS } from "@/utils";


export const getLastChatpdfMessages = async (id: string): Promise<Response<ChatpdfMessage.AsObject[]>> => {
    return new Promise((resolve, reject) => {
        const req = new GenericReq()
        req.setId(id)
        const stream = chatpdfMessageService.getLastChatpdfMessage(req)
        const messages: ChatpdfMessage.AsObject[] = []
        stream.on('data', (response) => {
            messages.push(response.toObject())
        })

        stream.on('error', (err) => {
            resolve({
                message: err.message,
                status: STATUS.INTERNAL
            })
        })

        stream.on('end', () => {
            resolve({
                message: "Se obtuvieron los mensajes",
                status: STATUS.OK,
                data: messages
            })
        })
    })

}

export const createChatpdfMessage = async (chatpdfId: string, message: string, role: GPTRole): Promise<Response<GenericRes.AsObject>> => {
    return new Promise((resolve, reject) => {
        const req = new CreateChatpdfMessageReq()
        req.setChatpdfid(chatpdfId)
        req.setContent(message)
        req.setRole(role)
        chatpdfMessageService.createChatpdfMessage(req, (err, res) => {
            if (err) {
                resolve({
                    message: err.details,
                    status: err.code
                })
            } else {
                resolve({
                    message: res.getMessage(),
                    status: res.getStatus(),
                    data: res.toObject()
                })
            }
        })
    })
}


export const deleteChatpdfMessage = async (id: string): Promise<Response<GenericRes.AsObject>> => {
    return new Promise((resolve, reject) => {
        const req = new GenericReq()
        req.setId(id)
        chatpdfMessageService.delteChatpdfMessage(req, (err, res) => {
            if (err) {
                resolve({
                    message: err.details,
                    status: err.code
                })
            } else {
                resolve({
                    message: res.getMessage(),
                    status: res.getStatus(),
                    data: res.toObject()
                })
            }
        })
    })
}