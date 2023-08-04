
// 하나의 상품 객체에 대한 설계도
class Product {
  // 객체를 만들 때 초기값을 세팅하는 용도
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}
// 객체 생성
const p1 = new Product('아이폰 13', 'https://img.danawa.com/prod_img/500000/256/253/img/15253256_1.jpg?shrink=500:500', 800000, '시대지난 구형 스마트폰');
console.log(p1);
const p2 = new Product('아이폰 14', 'https://img.danawa.com/prod_img/500000/393/816/img/17816393_1.jpg?shrink=500:500', 1200000, '상당한 스펙의 스마트폰');
console.log(p2);


// 화면 가장 상단부에 들어갈 장바구니 총액 정보 생성 클래스
class ShoppingCart {
  constructor() {
    // 담은 Product들을 저장
    this.cartItems = [

    ];
  }

  render() {
    const $cart = document.createElement('section');
    $cart.classList.add('cart');
    $cart.innerHTML = `
      <h2>총액 0원</h2>
      <button>주문하기</button>
    `;
    return $cart;
  }
}

// 한 개의 li태그를 생성하는 컴포넌트 클래스 설계
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  // 담기버튼 클릭이벤트 핸들러
  addToCartHandler() {
    console.log('장바구니에 상품을 추가함!!');
    console.log(this);
    // 이 핸들러에서 누른 그 상품의 정보를 알야한다.
  }
  render() {
    const $prod = document.createElement('li');
    $prod.classList.add('product-item');
    $prod.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>${this.product.price}원</h3>
              <p>${this.product.description}</p>
              <button>담기</button>
            </div>
          </div>
        `;

    const $addCartBtn = $prod.querySelector('button');
    // $addCartBtn.addEventListener('click', this.addToCartHandler.bind(this));
    $addCartBtn.addEventListener('click', () => this.addToCartHandler());
    return $prod;
  }
}

// 한 개의 UL을 생성하는 클래스
class ProductList {
  constructor() {
    // 상품들을 모아 놓은 배열
    this.products = [
      p1,
      p2,
      new Product(
        '햄버거',
        'https://images.chosun.com/resizer/5jStJ5InVS4u3iHvEzB8y_tGrr8=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HV765ADF7VF4FLG5KISDNFMUJ4.PNG',
        16900,
        '꽈뜨로 맥씨멈 스테카 버거~'
      ),
      new Product(
        '애플워치',
        'https://img.danawa.com/prod_img/500000/535/481/img/15481535_1.jpg?_v=20211215103510',
        400000,
        'APPLE watch 2세대 2022'
      ),
      new Product(
        '맥북프로14',
        'https://img.danawa.com/prod_img/500000/517/994/img/15994517_2.jpg?shrink=500:500',
        2100000,
        'APPLE 2021 맥북프로14 MKGR3KH/A M1 Max'
      ),
    ]
  }
  render() {
    // console.log('render!!', this);
    const $prodList = document.createElement('ul');
    $prodList.classList.add('product-list');
    this.products.forEach(prod => {
      const productItem = new ProductItem(prod);
      // console.log(productItem);
      $prodList.appendChild(productItem.render());
    });
    return $prodList;
  }
}

// ShoppingCart와 ProductList를 함쳐서 렌더링처리하는 클래스
class Shop {
  constructor() {
    this.render();
  }
  render() {
    const $app = document.getElementById('app');
    $app.appendChild(new ShoppingCart().render());
    $app.appendChild(new ProductList().render());
  }
}


// 렌더링 명령
new Shop();