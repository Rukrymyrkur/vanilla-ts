
const makeFullName1 = (obj: { firstName: string, lastName: string }) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  }
}

const fullName1 = makeFullName1({ firstName: 'Alice', lastName: 'Cooper' })


const makeFullName2 = <T extends { firstName: string, lastName: string }>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  }
}

const fullName2 = makeFullName2({ firstName: 'Alice', lastName: 'Cooper', hobbies: ['fishing'], age: 123 })
