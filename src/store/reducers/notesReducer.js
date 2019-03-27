const initialState = {
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_NOTES':
      const shortId = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      const newNote = {
        id: `${shortId()}-${shortId()}`,
        createdat: action.payload.createdAt,
        text: action.payload.text,
        completed: false,
      }
      return {
        ...state,
        notes: [newNote, ...state.notes],
      }
    
    case 'DELETE_NOTE':
      const { payload: { id } } = action
      const newNotes = state.notes.filter(item => item.id !== id)
      return {
        ...state,
        notes: newNotes,
      }

    case 'TOOGLE_NOTE':
      const updatedNotes = state.notes.map(item =>
        (item.id === action.payload.id)
          ? {...item, completed: !item.completed}
          : item
      )
      return {
        ...state,
        notes: updatedNotes,
      }

    default:
      return state;
  }
};