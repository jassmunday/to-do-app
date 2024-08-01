import {atom,selector} from "recoil";

export const todoAtom = atom({
    key:"todoAtom",
    default:[]
})

export const todoTitle = atom({
    key:"todoTitle",
    default:""
})

export const todoDescription = atom({
    key:"todoDescription",
    default:""
})

