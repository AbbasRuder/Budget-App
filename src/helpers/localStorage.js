export const fetchData = (key) => {
    return localStorage.getItem(key)
}

export const deleteData = ({key}) => {
    return localStorage.removeItem(key)
}