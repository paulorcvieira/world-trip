import { NextApiRequest, NextApiResponse } from 'next';

import continents from '../../utils/database'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('API: ', continents)
  res.status(200).json(continents)
}