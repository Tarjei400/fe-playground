
export const fetcher = (...args) => fetch(...args).then((res) => res.json())


export const saveTheme = (theme, update = false) => {
    return fetcher(`http://localhost:8080/theme`,{
        body: JSON.stringify(theme),
        headers: {
            'Content-Type': 'application/json'
        },
        method: update ? 'PUT': 'POST'
    })
}

export const getThemes = (theme) => {
    return fetcher(`http://localhost:8080/theme`,{
        method: 'GET'
    })
}
