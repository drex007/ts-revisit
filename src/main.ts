//types
let hello:string ="world"

const getFullName=(name:string, surname:string):string => {
  return name + '' + surname

}

//Interfaces
interface UserInterface{
  name: string;
  age?:number;
  getMessage?(): string;
}

const user: UserInterface = {
  name:"",
  age:30,
  getMessage() {
     return "Hello"
  }, 


}

//Classes

class UserClass {
  firstName:string;
  lastName: string;
  readonly unchangeableName: string;

  constructor (firstName: string, lastName:string){
    this.firstName = firstName,
    this.lastName = lastName
    this.unchangeableName = firstName

  }

  getFullName =():string => {
    return this.firstName + '' + this.lastName
  }
}


const userObject = new UserClass("James", "Worthen")



// The Admin class extends the Userclass and have extra properties like editor, a setter and getter function 
class AdminClass extends UserClass {
  private editor: string
  setEditior(editor: string){
    this.editor = editor
  }

  getEditor(): string {
    return this.editor

  }

}

const adminObject = new AdminClass("Jamaes", "Brown")
adminObject.setEditior("James Editor")
adminObject.getEditor()
adminObject.firstName
adminObject.lastName
adminObject.unchangeableName
adminObject.getFullName()

//Types
// - string, any, number, HTMLInputElement, unkwown, never, void , generic-type


//Generic-Type(T)
//The symbol for using the generic type is T, but this will still allow string types. To narrow it down to objects ,
// we use the extends keyword to make sure that only objects are allowed in the functions

const addId = <T extends object>(obj:T) => {

  const id = Math.random().toString(16);
  return {
    ...obj,
    id
  }

}

const userId : UserInterface = {
  name:"Jack"


}

const generateUserId = addId<UserInterface>(userId)



//ENUMS

enum ENUM1 {
  started,
  notStarted,
  Done
}

enum ENUM2 {
  started ='started',
  notStarted = 'notStarted',
  Done='done'
}

