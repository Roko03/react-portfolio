/// <reference types="vite/client" />

type User = {
    name: string;
    surname: string;
    image: string;
    birth: string;
    address: string;
    contact: string;
    ability: Ability[];
}

type Ability = {
    name: string;
    knowledge: number;
}