interface SanityBody{
    _createdAt:string,
    _id:string,
    _rev:string,
    _updatedAt:string
}
interface Image{
    _type:'image',
    assets:{
        _ref:string,
        _type:'reference'
    }
}
export interface PageInfo extends SanityBody{
    _type:'PageInfo',
    address:string,
    backgroundInformation:string,
    email:string,
    role:string,
    heroImage:Image,
    name:string,
    phoneNumber:string,
    profilePic:Image
}
export interface Technology extends SanityBody{
    _type:'skill',
    image:Image,
    progress:number,
    title:string
}
export interface Skill extends SanityBody{
    _type:'skill',
    image:Image,
    progress:number,
    title:string
}
export interface Project extends SanityBody{
    title:string,
    _type:'project',
    image:Image,
    linkToBuild:string,
    summary:string,
    technologies:Technology[]
}
export interface Experience extends SanityBody{
    _type:'experience',
    company:Image,
    companyImage:image,
    dateStared:date,
    dateEnded:date,
    inCurrentlyWorkingHere:boolean,
    jobTitle:sting,
    points:string[],
    technologies:Technology[]
}
export interface Social extends SanityBody{
    _type:'social'
    title:string,
    url:string
}