export function resetState(state, initState) {
    const initStateClone = JSON.parse(JSON.stringify(initState));
    Object.keys(initStateClone).forEach((key) => {
        state[key] = initStateClone[key];
    });
    return state;
}
