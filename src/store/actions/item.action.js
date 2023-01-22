export const SELECTED_ITEM = "SELEC_ITEM";
export const FILTERED_ITEM = "FILTERED_ITEM";

export const selectItem = (id) => ({
    type: SELECTED_ITEM,
    itemID: id,
});

export const filteredItem = (id) => ({
    type: FILTERED_ITEM,
    categoryID: id
});