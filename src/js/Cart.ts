import Movie from './Movie'
import Buyble from './Buyble';

export default class Cart {
  private _items: Buyble[] = [];

  add(item: Buyble): void {
    this._items.push(item);
  }

  get items(): Buyble[] {
    return [...this._items];
  }

  count(): number {
    let sum: number = 0;
    for (let item of this.items) {
      if (item.quantity) {
        sum = sum + (item.price * item.quantity);
      } else {
        sum = sum + item.price;
      }
    }

    return sum;
  }

  countWithDiscount(discount: number): number {
    let sum: number = 0;
    for (let item of this.items) {
      if (item.quantity) {
        let percent: number = (item.price / 100) * discount;
        sum += (item.price - percent) * item.quantity;
      } else {
        let percent: number = (item.price / 100) * discount;
        sum += item.price - percent;
      }   
    }

    return sum;
  }

  removeGood(good_id: number):void {
    for (let [index, obj] of Object.entries(this.items)) {
      if(obj.id === good_id) {
        this._items.splice(Number(index), 1);
      }
    }
  }
}
