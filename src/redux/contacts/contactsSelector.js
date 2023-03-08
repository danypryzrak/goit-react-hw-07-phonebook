export const selectContacts = store => {return store.contacts.items.filter(({name}) => name.toLowerCase().includes(store.filter.toLowerCase()))}
export const getFiltered = store => store.filter;
export const selectIsLoader = store => store.contacts.isLoading;