import personSchema from "./models/personSchema.js"

const personQueryResolver = {

    getALlPersons : async (_,__,context) => {

        if(!context.personContext) throw new Error("Sorry you are not authorized to access Persons List")
        
        const persons = await personSchema.find()
        return persons
    },

    getPersonByID : async (_,{id}) => {
        const person = await personSchema.findById(id)
        return person
    }

}

export default personQueryResolver