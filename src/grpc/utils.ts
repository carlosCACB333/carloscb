
"use server"
import { Response } from "@/interfaces"
import { utilService } from "@/libs/grpc-client"
import { SendEmailReq } from "@/pb/util_pb"
import { AUTHOR_EMAIL, STATUS } from "@/utils"

export const sendEmails = async (emails: string[], subject: string, body: string): Promise<Response<string>> => {
    const request = new SendEmailReq()
    request.setSubject(subject)
    request.setBody(body)
    request.setToList(emails)

    return new Promise((resolve, reject) => {
        utilService.sendEmail(request, (err, res) => {
            if (err) {
                resolve({
                    status: err.code,
                    message: err.details
                })

            } else {
                resolve({
                    message: "Se envio el correo",
                    status: STATUS.OK,
                    data: res.getMessage()
                })
            }
        })
    })
}

export const sendEmailContact = (subject: string, body: string) => {
    return sendEmails([AUTHOR_EMAIL], subject, body)
}