import {Skill} from '../typing';

export const  fetchSkill = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
    const data = await res.json();
    const skills:Skill[] = data.skill;
    return skills;
}