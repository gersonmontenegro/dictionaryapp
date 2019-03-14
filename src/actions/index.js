export const addWords = words => (
    {
        type: 'ADD_WORD',
        payload: words
    }
)

export const setDetail = details => (
    {
        type: 'SET_DETAIL',
        payload: details
    }
)

export const viewPopover = visible => (
    {
        type: 'VIEW_POPOVER',
        payload: visible
    }
)