import { NextApiRequest, NextApiResponse } from 'next';

import continents from '../../utils/database'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query

  const continent = continents.find(cnt => cnt.slug === slug)

  res.status(200).json(continent)
}