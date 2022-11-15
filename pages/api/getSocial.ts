// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity';
import {sanityClient} from '../../sanity';
import {Social} from '../../typing';
const query = groq`
    *[_type=='social']
`;
interface DataType{
    social:Social[]
}
export default async function handler(req: NextApiRequest,res: NextApiResponse<DataType>) {
  const social:Social[] = await sanityClient.fetch(query);
  res.status(200).json({social}); 
}