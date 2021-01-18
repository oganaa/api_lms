module.exports = {
    run: async () => {
        let users = await MODELS.users.findAll()
        if (users.length == 0) {
            users = [
                {
                    email: 'john@gmail.com',
                    password: '123'
                },
                {
                    email: 'edward@gmail.com',
                    password: '789',
                    role: "ADMIN"
                }
            ];
            await MODELS.users.bulkCreate(users)
        }
    }
};
