export const SELECTED_BREAD = "SELECT_BREAD";
export const FILTERED_BREAD = "FILTERED_BREAD";

export const selectBread = (id) => ({
    type: SELECTED_BREAD,
    breadID: id,
});

export const filteredBread = (id) => ({
    type: FILTERED_BREAD,
    categoryID: id
});