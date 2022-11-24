import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import {AddActionI, DelActionI, itemsI, comleteItemI} from "../../interfaces";

interface groupsI {
    name: string,
    items: itemsI[]
}

export interface TodoState {
  groups: groupsI[]
}

const initialState: TodoState = {
    groups: [
         // {text: "qweqw", completed: true, id: 'qweASfasd'}
    ]
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addGroup: (state, action : PayloadAction<string>) => {
        state.groups.push( {name: action.payload, items: []} )
    },
    deleteGroup: (state, action: PayloadAction<string>) => {
        state.groups = state.groups.filter(el => el.name !== action.payload)
    },
    addItemToGroup : (state, action : PayloadAction<AddActionI>) => {
        let group = state.groups.find(item => item.name === action.payload.name)
        if (group) {
            group.items.push({text: action.payload.item, id: nanoid(), completed: false})
        }
    },
    deleteItemInGroup: (state, action : PayloadAction<DelActionI>) => {
        let group = state.groups.find(item => item.name === action.payload.name)
        if (group) {
            group.items = group.items.filter(item => item.id !== action.payload.id)
        }
    },
    completeItem: (state, action: PayloadAction<comleteItemI>) => {
        let group = state.groups.find(item => item.name === action.payload.group)
        if (group) {
            let item = group.items.find((item : itemsI) => item.id === action.payload.id)
            if (item) {
                item.completed = !item.completed
            }
        }
    },
}})

export const { addGroup, addItemToGroup, deleteGroup, deleteItemInGroup, completeItem } = todoSlice.actions

export default todoSlice.reducer