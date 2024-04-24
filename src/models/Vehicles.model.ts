import { DateTime } from 'next-auth/providers/kakao'

export interface Vehicles {
    id: number
    brand: string
    model: string
    equipment: string
    owner: string
    views: string[]
    date: DateTime
    licensePlate: string
    comment: string
}
