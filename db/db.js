export const people = [
    {
        id: 0,
        name : "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id: 1,
        name : "Ladley",
        age: 28,
        gender: "female"
    }
]

export onst getById = id => {
    const filteredPeople = people.filter(person => id === people.id);
    return filteredPeople[0];
}