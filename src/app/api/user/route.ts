import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

export async function POST(req: NextRequest) {
    const json = await req.json()
    await prisma.user.create({
        data: {
            name: json.name,
        },
    })
    return NextResponse.json({ message: 'ok' }, { status: 200 })
}
