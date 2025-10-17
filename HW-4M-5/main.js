const getData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();

    const row = document.querySelector(".row");

    data.forEach((product) => {
      const div = document.createElement("div");
      div.className = "col-4";
      div.innerHTML = `
            <div class="products-content">
                        <img src="${product.image}" alt=""/>
                        <h4 class="products-content-title">${
                          product.title.length > 35
                            ? product.title.slice(0, 35) + "..."
                            : product.title
                        }</h4>
                        <p class="products-content-description">${
                          product.description.length > 60
                            ? product.description.slice(0, 60) + "..."
                            : product.description
                        }
                            </p>
                        <b>${product.price} KGS</b>
                        <a href="./detail/detail.html?id=${
                          product.id
                        }" class="header-button">Подробнее</a>
                    </div>
            `;
      row.appendChild(div);
    });
  } catch (e) {
    console.log(e);
  }
};

getData();
