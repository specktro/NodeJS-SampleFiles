interface BuildOptions {
    getUUID: () => string
    getAge: (birthdate: string) => number
}

interface UserProperties {
    name: string
    birthdate: string
}

export const buildMakePerson = ({ getUUID, getAge }: BuildOptions) => {
    return ({name, birthdate}: UserProperties) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}