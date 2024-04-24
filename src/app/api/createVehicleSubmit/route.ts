import prisma from '../../../../lib/prisma'

export async function POST(request: Request) {
    await createItem()
    return Response.json({ message: 'ok' })
}

async function createItem() {
    return prisma.vehicle.create({
        data: {
            brand: 'RENAULT',
            model: 'Kangoo',
            equipment: 'no',
            date: new Date(),
            licencePlate: 'AA-XXX-AA',
            owner: 'moi',
            comment: 'adnqlsndl qshdqsdhqsdh o fhsdh f hds fsdlkj',
        },
    })
}
