export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined
    }
};

export const saveState = (state) => {
    try {
        const serealizedState = JSON.stringify(state);
        localStorage.setItem('state', serealizedState);
    } catch (error) {
        return undefined
    }
}