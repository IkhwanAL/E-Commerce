export const addQuantityItem = (existItem, newItem) => {
    const existingItem = existItem.find(item => item.id === newItem.id);

    if(existingItem){
        return existItem.map( // Return Array
            item => item.id === newItem.id 
            ? { ...item, quantity: item.quantity + 1}
            : item 
        );
    }

    return [...existItem, {...newItem, quantity: 1}]; // Return Array
}