export function filter(search, restaurants) {
    const filterData = restaurants.filter((restaurant) => (restaurant?.info?.name?.toLowerCase().includes(search.toLowerCase())));
    return filterData;
}