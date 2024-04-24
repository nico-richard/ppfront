import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'
import { Vehicle } from '@prisma/client'

export async function GET(req: NextRequest) {
    const vehicles: Vehicle[] = await prisma.vehicle.findMany()
    return NextResponse.json({ vehicles }, { status: 200 })
}
