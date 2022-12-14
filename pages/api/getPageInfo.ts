// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity';
import {sanityClient} from '../../sanity';
import {PageInfo} from '../../typing';
const query = groq`
*[_type=='pageInfo']
`;
type  DataType ={
    pageInfo:PageInfo
  }
export default async function handler(req: NextApiRequest,res: NextApiResponse<DataType>) {
  const pageInfo:PageInfo = await sanityClient.fetch(query);
  res.status(200).json({pageInfo}); 
}