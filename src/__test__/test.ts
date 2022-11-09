import Buyble from '../js/Buyble'
import Movie from '../js/Movie'
import Cart from '../js/Cart'

test('test class Movie', () => {
  const good = new Movie(
    100, 
    'Мстители', 
    2012, 
    'США', 
    'Avengers Assemble!', 
    ['фантастика', 'боевик', 'фэнтази', 'приключения'], 
    1230, 
    900,
  );
  const result = {
    id: 100,
    name: 'Мстители',
    year: 2012,
    country: 'США',
    slogan: 'Avengers Assemble!',
    genre: [ 'фантастика', 'боевик', 'фэнтази', 'приключения' ],
    time: 1230,
    price: 900
    };
    expect(good).toEqual(result);
});

test('test Cart method add Move', () => {
    const cart = new Cart()
    const good = new Movie(
        50, 
        'Мстители', 
        2012, 
        'США', 
        'Avengers Assemble!', 
        ['фантастика', 'боевик', 'фэнтази', 'приключения'], 
        530, 
        200,
    );

    cart.add(good);
    expect(cart.items).toEqual([good]);
    expect(cart.items.length).toBe(1);
});

test('test Cart method count without discount', () => {
    const cart = new Cart()
    const good = {
        id: 1000,
        name: 'test_item',
        price: 10000,
    };
    const good2 = {
        id: 500,
        name: 'test_item2',
        price: 5000,
    };
    const good3 = {
        id: 10,
        name: 'test_item3',
        price: 10000,
    };
    cart.add(good);
    cart.add(good2);
    cart.add(good3);
    expect(cart.count()).toBe(25000);
    
});

test('test Cart method count with discount', () => {
    const cart = new Cart()
    const discount = 10
    const good = new Movie(
        100, 
        'Мстители', 
        2012, 
        'США', 
        'Avengers Assemble!', 
        ['фантастика', 'боевик', 'фэнтази', 'приключения'], 
        1230, 
        10000,
    );
    const good2 = {
        id: 500,
        name: 'test_item2',
        price: 5000,
    };
    const good3 = {
        id: 10,
        name: 'test_item3',
        price: 10000,
    };
    cart.add(good);
    cart.add(good2);
    cart.add(good3);
    expect(cart.countWithDiscount(discount)).toBe(22500);
});

test('test Cart method delete item', () => {
    const cart = new Cart()
    const good = {
        id: 500,
        name: 'test_item1',
        price: 5000,
    };
    cart.add(good);
    expect(cart.items.length).toBe(1);
    cart.removeGood(500);
    expect(cart.items.length).toBe(0);
    
});

test('test Cart method add many', () => {
    const cart = new Cart()
    const goods = {
        id: 500,
        name: 'test_item1',
        price: 5000,
        quantity: 10,
    };
    cart.add(goods);
    const resultPrice = cart.count();
    expect(cart.items.length).toBe(1);
    expect(resultPrice).toBe(50000);
});

