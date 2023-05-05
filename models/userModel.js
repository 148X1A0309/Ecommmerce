
class UserModel {
    constructor() {
    }
    loginUser(query) {
        return new Promise(async (resolve, reject) => {
            try {
                global.dbs['Ecommerce'].collection('register').find(query, { projection: { password: 0, lastname: 0 } })
                    ((err, result) => {
                        if (err) {
                            return resolve({
                                success: false,
                                error: err.message
                            })
                        } else {
                            return resolve({
                                success: true,
                                data: result
                            })
                        }
                    })
            } catch (error) {
                reject(error);
            }
        })
    }

}


module.exports = new UserModel();