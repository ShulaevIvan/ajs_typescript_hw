import Buyable from './Buyble'

export default class Movie implements Buyable {
    constructor(
      readonly id: number,
      readonly name: string,
      readonly year: number,
      readonly country: string,
      readonly slogan: string,
      readonly genre: object,
      readonly time: number,
      readonly price: number) {
    }
};
