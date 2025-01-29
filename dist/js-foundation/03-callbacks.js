"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];
const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id);
    if (!user) {
        return callback(`User with id ${id} not found`, undefined);
    }
    return callback(undefined, user);
};
exports.getUserById = getUserById;
