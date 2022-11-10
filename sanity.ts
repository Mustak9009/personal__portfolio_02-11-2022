import {createClient} from 'next-sanity';
import createImageUrl from '@sanity/image-url';
interface configType{
    dataset:string,
    projectId:string | undefined,
    apiVersion:string,
    useCdn:boolean
}
export const config:configType = {
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion:"2021-03-25",
    useCdn:process.env.NODE_ENV == 'production'
}
export const sanityClient = createClient(config);
export const urlFor = (source:any)=>createImageUrl(config).image(source);