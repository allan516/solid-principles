/*
  O Princípio da Inversão de Dependência (DIP) é um dos cinco princípios SOLID da programação orientada a objetos, que tem como objetivo tornar o código mais flexível, reutilizável e de fácil manutenção. A inversão de dependência trata de como os módulos de alto nível de uma aplicação devem depender de abstrações, e não de implementações concretas.

  Por que a DIP é importante?

  Reduz o acoplamento: Facilita a manutenção e a extensão do código, pois os componentes dependem de interfaces ou classes abstratas em vez de implementações concretas.

  Facilita a substituição: Trocar a implementação de um componente não afeta o código que depende dele, pois a dependência é com uma abstração.

  Melhora a testabilidade: Testes são facilitados, já que é possível substituir dependências concretas por "mocks" ou "stubs".

  Definição do Princípio:

  Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

  Dependa de abstrações, não de implementações.

  Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

  Classes de baixo nível são classes que executam tarefas (os detalhes)

  Classes de alto nível são classes que gerenciam as classes de baixo nível (classe concreta)
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { TenPercentDiscount } from './classes/discount';
import { EnterpriseCustomer /*IndividualCustomer*/ } from './classes/customer';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
//const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Allan',
//   'Mendes',
//   '111.111.111-00',
// );

const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa',
  '111.111.111-0011',
);

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
