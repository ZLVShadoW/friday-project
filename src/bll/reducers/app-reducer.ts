const init = {
    greeting: '' as string
} as const

export const appReducer = (state: AppReducerStateType = init, action: AppReducerActionType): AppReducerStateType => {
    switch (action.type) {
        case 'CHECK': {
            return {
                ...state, greeting: action.txt
            }
        }
        default:
            return state
    }
}


// ----------- actions
export const check = () => ({type: 'CHECK', txt: 'Проверка микрофона'}) as const


// ----------- types
type AppReducerStateType = typeof init
type AppReducerActionType = Check

type Check = ReturnType<typeof check>