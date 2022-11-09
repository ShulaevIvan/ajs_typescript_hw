/* eslint-disable-next-line */
export default interface Buyable {
  readonly id: number,
  readonly name: string,
  readonly year?: number,
  readonly country?: string,
  readonly slogan?: string,
  readonly genre?: object,
  readonly time?: number,
  readonly price: number,
  readonly quantity?: number,
}
