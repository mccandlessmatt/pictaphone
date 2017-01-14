import * as actions from 'actions/wordsActions';

export const addWord = (word, difficulty) => ({
    type: actions.ADD_WORD,
    payload: { difficulty, word }
});
