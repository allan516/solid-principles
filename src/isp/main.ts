/*
O Princípio da Segregação de Interface (ISP - Interface Segregation Principle) é um dos cinco princípios SOLID de design de software, que visam criar sistemas mais compreensíveis, flexíveis e sustentáveis. O ISP afirma que uma classe não deve ser forçada a implementar interfaces que não utiliza. Em outras palavras, é preferível ter várias interfaces específicas em vez de uma única interface geral.

Principais Aspectos do ISP:
Interfaces Específicas: Crie interfaces que atendam a um propósito específico, permitindo que as classes implementem apenas os métodos que realmente precisam.

Redução do Acoplamento: Ao usar interfaces menores e mais focadas, o acoplamento entre diferentes partes do sistema é reduzido, tornando-o mais modular e fácil de modificar.

Facilidade de Testes: Com interfaces menores, fica mais fácil realizar testes unitários, pois as dependências são mais simples e específicas.
------------------------------------------------------------------
  Interface segregation principle (Princípio da segregação de Interface)
  os clientes não devem ser forçados a depender de types,interfaces ou classes abstratas que não utilizam.

  *Não se aplica apenas a Interfaces
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
