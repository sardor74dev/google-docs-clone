export default defineEventHandler(async (event) => {
    const storage = useStorage("data")
    const documentId = await getRouterParam(event, "id")
    const document = (await readBody(event)).document

    if(!documentId || !document) {
        throw createError({
            statusCode: 400,
            statusMessage: "Document ID or document content is missing"
        })
    }

    await storage.setItem(`document-${documentId}`, document)

    return document
})