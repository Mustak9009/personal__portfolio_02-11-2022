// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity';
import {sanityClient} from '../../sanity';
import {Skill} from '../../typing';
const query = groq`
    *[_type=='skill']
`;
interface DataType{
    skill:Skill[]
}
export default async function handler(req: NextApiRequest,res: NextApiResponse<DataType>) {
  const skill:Skill[] = await sanityClient.fetch(query);
  res.status(200).json({skill}); 
}