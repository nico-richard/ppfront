import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'
import { Brand } from '@/models/Brands.model'

export async function GET() {
    const brands: Brand[] = await prisma.brand.findMany()
    return NextResponse.json({ brands }, { status: 200 })
}

export async function POST(request: NextRequest) {
    const json: { newBrand: string } = await request.json()
    await prisma.brand.create({
        data: {
            name: json.newBrand,
        },
    })

    return NextResponse.json({ status: 200 })
}
