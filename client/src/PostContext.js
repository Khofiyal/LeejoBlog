import { previousTuesday } from "date-fns";
import { createContext, useReducer } from "react";

export const PostContext = createContext()

export const postReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DELETE':
            post: state.post.filter((p) => p._id !== action.payload._id)
    }
}