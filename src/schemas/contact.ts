import { z } from "zod";

export const ContacSchema = z.object({
  name: z
    .string({
      invalid_type_error: "El nombre debe ser un texto",
      required_error: "El nombre debe ser un texto",
    })
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres",
    })
    .max(50, {
      message: "El nombre debe tener como maximo 50 caracteres",
    }),
  email: z
    .string({
      invalid_type_error: "El email debe ser un texto",
      required_error: "El email es requerido",
    })
    .email({
      message: "Ingrese un email valido",
    }),
  phone: z
    .string()
    .min(8, {
      message: "El telefono debe tener al menos 9 caracteres",
    })
    .max(11, {
      message: "El telefono debe tener como maximo 11 caracteres",
    }),
  affair: z
    .string({
      invalid_type_error: "El asunto debe ser un texto",
      required_error: "El asunto es requerido",
    })
    .min(3, {
      message: "El asunto debe tener al menos 3 caracteres",
    })
    .max(50, {
      message: "El asunto debe tener como maximo 50 caracteres",
    }),
  message: z
    .string({
      invalid_type_error: "El mensaje debe ser un texto",
      required_error: "El mensaje es requerido",
    })
    .min(3, {
      message: "El mensaje debe tener al menos 3 caracteres",
    })
    .max(500, {
      message: "El mensaje debe tener como maximo 500 caracteres",
    }),
});
