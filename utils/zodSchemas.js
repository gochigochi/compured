import { z } from "zod"

export const ContactMessageSchema = z.object({
    name: z.string().min(1, { message: "Agregue un nombre"}),
    email: z.string().min(1, { message: "Agregue un correo" }).email({ message: "Agregue un email correcto" }),
    message: z.string().min(3, { message: "Escriba un mensaje" }),
})

export const AdminLoginSchema = z.object({
    user: z.string().min(1, { message: "Ingrese su usuario"}),
    password: z.string().min(1, { message: "Escriba una contraseña" }),
})