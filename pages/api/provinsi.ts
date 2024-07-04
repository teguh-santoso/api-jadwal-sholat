import { getProvince } from '../../helper/Province' 
import type { NextApiRequest, NextApiResponse } from 'next'

export const runtime = 'edge';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({ data: getProvince() })
}
