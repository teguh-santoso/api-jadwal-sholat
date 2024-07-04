import type { NextApiRequest, NextApiResponse } from 'next'

export const runtime = 'edge';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({ message: "Please check documentation before use API" })
}
