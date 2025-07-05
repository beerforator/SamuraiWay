let state = {
    postsListDB: [
        { id: 1, message: "Third post", likes: 14 },
        { id: 1, message: "Dorogoy Dnevnik", likes: 0 },
        { id: 1, message: "First post. Lets start", likes: 3 }
    ],
    chatListDB: [
        { c_id: 1, name: "Oleg" },
        { c_id: 2, name: "Masha" },
        { c_id: 3, name: "Igor" },
        { c_id: 4, name: "Henry" }
    ],
    messagesListDB: [
        { c_id: 1, m_id: 1, message_stuff: "Hi, my name is", byme: false },
        { c_id: 1, m_id: 2, message_stuff: "Who?", byme: true },
        { c_id: 1, m_id: 3, message_stuff: "Slllliiimmm Shhhaadyyy", byme: false }
    ],
    peoplesDB: [
        { id: 1, name: "Ilyha Manahoov" },
        { id: 2, name: "Oleg" },
        { id: 3, name: "Masha" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Henry" }
    ]
}

export default state