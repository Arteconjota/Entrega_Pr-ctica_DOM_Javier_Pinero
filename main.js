//Div para maquetar la carta online.
const menu = document.createElement("div");
menu.className = "menu";
document.body.appendChild(menu);


//Creación del filtro.
const sectFilter = document.createElement("section");
sectFilter.className = "filter";
menu.appendChild(sectFilter);

const titleFilter = document.createElement("h3");
titleFilter.className = "titleFilter";
titleFilter.textContent = "Filtra a tu gusto";
sectFilter.appendChild(titleFilter);

const ulFilter = document.createElement("ul");
const elemFilter = ["Ver todo", "Carnes", "Pescados", "Arroces y Pastas","Verduras", "Sopas", "Primeros", "Segundos", "Postres", "Sin gluten"];
for (elem of elemFilter) {
    const liFilter = document.createElement("li");
    liFilter.className = "checks"
    ulFilter.appendChild(liFilter);
    const input = document.createElement("input");
    input.id = "checkbox";
    input.type = "checkbox";
    const label = document.createElement("label");
    label.for = elem;
    label.textContent = elem;
    liFilter.appendChild(input);
    liFilter.appendChild(label);
}

sectFilter.appendChild(ulFilter);

//Primer checkbox seleccionado.
const checked = document.querySelector(".checks").firstChild;
checked.checked = true;

//Creación de artículos.
const sectArt = document.createElement("section");
sectArt.className = "articles";
menu.appendChild(sectArt);

const dataFood = ['meat', 'fish', 'ricePasta', 'soup', 'first', 'sec', 'dessert', 'gluten', 'vegan']

const products = [
    {
      name: 'Arroz con chipirones',
      price: '12.95€',
      data: ['fish', 'ricePasta', 'sec'],
      image: 'assets/img/blog-1.jpg'
    },
    {
        name: 'Cocido madrileño (1 persona)',
        price: '5.95€',
        data: ['soup', 'first', 'meat'],
        image: 'assets/img/blog-2.jpg'
      },
      {
        name: 'Cocido madrileño (4 personas)',
        price: '20.95€',
        data: ['soup', 'first', 'meat'],
        image: 'assets/img/blog-3.jpg'
      },
      {
        name: 'Risotto de boletus',
        price: '12.95€',
        data: ['ricePasta'],
        image: 'assets/img/blog-4.jpg'
      },
      {
        name: 'Albóndigas con patatas fritas',
        price: '8.95€',
        data: ['meat','sec'],
        image: 'assets/img/blog-5.jpg'
      },
      {
        name: 'Tallarines ai funghi',
        price: '10.95€',
        data: ['ricePasta'],
        image: 'assets/img/blog-6.jpg'
      },
      {
        name: 'Arroz con chipirones',
        price: '12.95€',
        data: ['fish', 'ricePasta', 'sec'],
        image: 'assets/img/blog-1.jpg'
      },
      {
          name: 'Cocido madrileño (1 persona)',
          price: '5.95€',
          data: ['soup', 'first', 'meat'],
          image: 'assets/img/blog-2.jpg'
        },
        {
          name: 'Cocido madrileño (4 personas)',
          price: '20.95€',
          data: ['soup', 'first', 'meat'],
          image: 'assets/img/blog-3.jpg'
        },
        {
          name: 'Risotto de boletus',
          price: '12.95€',
          data: ['ricePasta'],
          image: 'assets/img/blog-4.jpg'
        },
        {
          name: 'Albóndigas con patatas fritas',
          price: '8.95€',
          data: ['meat','sec'],
          image: 'assets/img/blog-5.jpg'
        },
        {
          name: 'Tallarines ai funghi',
          price: '10.95€',
          data: ['ricePasta'],
          image: 'assets/img/blog-6.jpg'
        },
];

//Galería de platos.
const displayProducts = () => {
  for (product of products) {
    const divProduct = document.createElement("div");
    divProduct.className = "product";
    sectArt.appendChild(divProduct);

    const imgProd = document.createElement("img");
    imgProd.className = "imgMenu";
    imgProd.src = product.image;
    divProduct.appendChild(imgProd);
    const nameProd = document.createElement("h2");
    nameProd.textContent = product.name;
    divProduct.appendChild(nameProd);
    const priceProd = document.createElement("p");
    priceProd.textContent = product.price;
    divProduct.appendChild(priceProd);
  }
}

displayProducts();

//Footer
const footer = document.createElement("footer");
document.body.append(footer);

const textFooter = document.createElement("p");
textFooter.className = "textFooter";
textFooter.innerText = "Powered by ©Arteconjota 2024 | AQUÍ Y AHORA | C/ Plaza Tirso de Molina, 4 - Madrid "
footer.appendChild(textFooter);