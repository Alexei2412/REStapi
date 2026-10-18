export interface CombatStyleModel {
    id:number;
    name: string;
    img: string;
    description: string;
    combat_style_character:CombatStyleCharcter[];
}
 export interface CombatStyleCharcter{
    id:number;
    description: string;
 }