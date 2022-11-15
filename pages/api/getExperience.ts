// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {groq} from 'next-sanity';
import {sanityClient} from '../../sanity';
import {Experience} from '../../typing';
const query = groq`
*[_type=='experience']{
  ...,
 technologies [] ->
}
`;
interface DataType{
    experience:Experience[]
}
export default async function handler(req: NextApiRequest,res: NextApiResponse<DataType>) {
  const experience:Experience[] = await sanityClient.fetch(query);
  res.status(200).json({experience}); 
}