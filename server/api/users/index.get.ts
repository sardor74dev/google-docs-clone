export default defineEventHandler(async (event) => {
    const query = await getQuery(event)
    const search = query.search?.toString()

    const users = [
        { username: 'john', name: 'John Doe' },
        { username: 'jane', name: 'Jane Smith' },
        { username: 'mike', name: 'Mike Johnson' }
    ]

    return users.filter((user) => 
        user.name.toLowerCase().includes(search?.toLowerCase() || "")
    )
})