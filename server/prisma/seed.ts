import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt';
import { createHash } from 'crypto';

const prisma = new PrismaClient()
async function main() {
    const account1 = await prisma.user.upsert({
        where: {email: 'peacelily@seed.com'},
        update: {},
        create: {
            email: 'peacelily@seed.com',
            password: await bcrypt.hash('test1234', 10),
            name: 'Peace Lily',
            invoices: {
                create: [
                    {
                        vendor_name: 'The Potted Things',
                        amount: 20.00,
                        due_date: new Date('2024-10-7'),
                        description: 'vendor description',
                        paid: false,
                    },
                    {
                        vendor_name: 'The Potted Things',
                        amount: 10.00,
                        due_date: new Date('2024-10-8'),
                        description: 'vendor description',
                        paid: true,
                    },
                ],
            },
        },
    })
    const account2 = await prisma.user.upsert({
        where: {email: 'monstera+albo@seed.com'},
        update: {},
        create: {
            email: 'monstera+albo@seed.com',
            password: await bcrypt.hash('test7777', 10),
            name: 'Monstera Albo',
            invoices: {
                create: [
                    {
                        vendor_name: 'The Potted Things',
                        amount: 20.00,
                        due_date: new Date('2024-10-8'),
                        description: 'vendor description',
                        paid: false,
                    },
                    {
                        vendor_name: 'The Potted Things',
                        amount: 30.00,
                        due_date: new Date('2024-10-8'),
                        description: 'vendor description',
                        paid: false,
                    },
                ],
            },
        },
    })
    const account3 = await prisma.user.upsert({
        where: {email: 'basil@seed.com'},
        update: {},
        create: {
            email: 'basil@seed.com',
            password: await bcrypt.hash('test5678', 10),
            name: 'Basil',
            invoices: {
                create: [
                    {
                        vendor_name: 'The Potted Things',
                        amount: 20.00,
                        due_date: new Date('2024-10-7'),
                        description: 'vendor description',
                        paid: false,
                    }
                ],
            },
        },
    })
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
});