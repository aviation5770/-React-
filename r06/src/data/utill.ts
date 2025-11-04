export const makeArray = (length : number) => new Array(length).fill(null)
// number 타입의 매개변수 length를 받아 null로 가득 채운 매개변수 length 만큼의 새로운 배열을 makeArray에 반환하겠다는 명령

export const range = (min : number, max : number) => makeArray(max - min).map((notUsed, index) => index + min)

export const random = (min : number, max : number) => Math.floor(Math.random() * (max - min)) + min