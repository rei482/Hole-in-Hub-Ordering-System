import { z } from 'zod'

// Shared Zod Validation Schemas across Frontend & Backend

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
})

export type LoginFormValues = z.infer<typeof loginSchema>

export const registerSchema = z
  .object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Contact number must be at least 10 digits'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type RegisterFormValues = z.infer<typeof registerSchema>

export const checkoutSchema = z.object({
  fullName: z.string().min(3, 'Full name is required'),
  phone: z.string().min(10, 'Valid contact number is required'),
  email: z.string().email('Valid email is required for receipt delivery'),
  address: z.string().min(5, 'Delivery address is required'),
  city: z.string().min(2, 'City is required'),
  postalCode: z.string().min(4, 'Postal code is required'),
  shippingMethod: z.enum(['standard', 'express']),
  paymentMethod: z.enum(['gcash', 'maya', 'cod']),
  notes: z.string().optional(),
})

export type CheckoutFormValues = z.infer<typeof checkoutSchema>

export const bayReservationSchema = z.object({
  bayNumber: z.number().int().min(1).max(12),
  date: z.string().min(1, 'Reservation date is required'),
  timeSlot: z.string().min(1, 'Time slot is required'),
  playersCount: z.number().int().min(1).max(6),
  customerName: z.string().min(2, 'Customer name is required'),
  customerPhone: z.string().min(10, 'Contact number is required'),
})

export type BayReservationFormValues = z.infer<typeof bayReservationSchema>
