import {Sim} from 'simple-boot-core/decorators/SimDecorator';

const randomName = () => {
    const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Amelia', 'Amy', 'Andrea', 'Angela', 'Anna', 'Anne', 'Audrey', 'Ava', 'Bella', 'Bernadette', 'Carol', 'Caroline', 'Carolyn', 'Chloe', 'Claire', 'Deirdre', 'Diana', 'Diane', 'Donna', 'Dorothy', 'Elizabeth', 'Ella', 'Emily', 'Emma', 'Faith', 'Felicity', 'Fiona', 'Gabrielle', 'Grace', 'Hannah', 'Heather', 'Irene', 'Jan', 'Jane', 'Jasmine', 'Jennifer', 'Jessica', 'Joan', 'Joanne', 'Julia', 'Karen', 'Katherine', 'Kimberly', 'Kylie', 'Lauren', 'Leah', 'Lillian', 'Lily', 'Lisa', 'Madeleine', 'Maria', 'Mary', 'Megan', 'Melanie', 'Michelle', 'Molly', 'Natalie', 'Nicola', 'Olivia', 'Penelope', 'Pippa', 'Rachel', 'Rebecca', 'Rose', 'Ruth', 'Sally', 'Samantha', 'Sarah', 'Sonia', 'Sophie', 'Stephanie', 'Sue', 'Theresa', 'Tracey', 'Una', 'Vanessa', 'Victoria', 'Virginia', 'Wanda', 'Wendy', 'Yvonne', 'Zoe'];
    return names[Math.floor(Math.random() * names.length)];
}

export type User = {
    seq: number;
    name: string;
    address: string;
    point: number;
    step: number;
}

export type Quiz = {
    seq: number;
    season: number;
    step: number;
    question: string;
    options: string[];
    answer: number;
}

export type TodayRank = {
    seq: number;
    userSeq: number;
}

export type SeasonRank = {
    seq: number;
    userSeq: number;
}

@Sim
export class DB {

}


//
// export type DB = {
//     users: User[];
//     quizs: Quiz[];
//     todayRank: TodayRank[];
//     seasonRank: SeasonRank[];
// }
//
//
// export const db: DB = {
//     users: [{seq: 1, name: 'visualkhh', address: 'seoul', point: 4, step: 1}],
//     todayRank: [],
//     seasonRank: [],
//     quizs: []
// }
