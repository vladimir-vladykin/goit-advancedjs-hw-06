/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

class StringNumberPair implements KeyValuePair<string, number> {
  constructor(public key: string, public value: number) {
    
  }
}

export {};