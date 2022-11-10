// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity';
import {sanityClient} from '../../sanity';
import {Project} from '../../typing';
const query = groq`
*[_type=='project']{
  ...,
 technologies [] ->
}
`;
interface DataType{
    project:Project[]
}
export default async function handler(req: NextApiRequest,res: NextApiResponse<DataType>) {
  const project:Project[] = await sanityClient.fetch(query);
  res.status(200).json({project}); 
}