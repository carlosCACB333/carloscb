import {
  grpcCreateOrUpdateUserWithoutAuth,
  grpcDeleteUserWithoutAuth,
} from "@/grpc/user";
import { createOrUpdateUserReq } from "@/pb/user_pb";
import { WEBHOOK_SECRET } from "@/utils";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(req: Request) {
  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new SVIX instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  if (evt.type === "user.created" || evt.type === "user.updated") {
    const req = new createOrUpdateUserReq();
    req.setId(evt.data.id);
    req.setEmail(evt.data.email_addresses[0]?.email_address);
    req.setFirstname(evt.data.first_name);
    req.setLastname(evt.data.last_name);
    req.setPhone(evt.data.phone_numbers[0]?.phone_number);
    req.setPhoto(evt.data.image_url);
    req.setUsername(evt.data.username || "");
    req.setGender(evt.data.gender);
    const res = await grpcCreateOrUpdateUserWithoutAuth(req);
    console.log(res);
  } else if (evt.type === "user.deleted") {
    const res = await grpcDeleteUserWithoutAuth(evt.data.id!);
    console.log(res);
  }

  return new Response("ok", { status: 201 });
}
