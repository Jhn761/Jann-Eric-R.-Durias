const products = [
    {
      name: "Carhartt Sleeves",
      description: "Durable streetwear with iconic workwear roots.",
      price: "₱1200",
      image: "product image/jakit.jpg"
    },
    {
      name: "Balenciaga Shirt",
      description: "High-end minimalism with a bold silhouette.",
      price: "₱1500",
      image: "product image/sira.jpg"
    },
    {
      name: "Vlone Shirt",
      description: "Urban legend—live alone, die alone.",
      price: "₱1100",
      image: "product image/vshirt.jpg"
    },
    {
      name: "Chrome Hearts",
      description: "Luxury meets rebellion in this iconic tee.",
      price: "₱1800",
      image: "product image/croma.jpg"
    },
    {
      name: "Palace Shirt",
      description: "Streetwear with a signature bold look.",
      price: "₱1300",
      image: "product image/palasyo.jpg"
    },
    {
      name: "Anti Social Social Club Shirt",
      description: "Embrace the culture with exclusive branding.",
      price: "₱1400",
      image: "product image/assc.jpg"
    },
    {
      name: "Givenchy Shirt",
      description: "Sophisticated and luxurious fashion style.",
      price: "₱1600",
      image: "product image/given.jpg"
    },
    {
      name: "Ralph Lauren Shirt",
      description: "Classic style with refined luxury.",
      price: "₱1450",
      image: "product image/loren.jpg"
    },
    {
      name: "Stussy Shirt",
      description: "Iconic streetwear with a cool vibe.",
      price: "₱1250",
      image: "product image/stus.jpg"
    }
  ];
  
  const productList = document.getElementById("product-list");
  const productModal = new bootstrap.Modal(document.getElementById("productModal"));
  
  products.forEach((product, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4 animated";
    col.innerHTML = `
      <div class="card h-100 shadow border-0">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <button class="btn btn-success w-100" data-index="${index}">Add to Cart</button>
        </div>
      </div>
    `;
    productList.appendChild(col);
  });
  
  document.querySelectorAll("button[data-index]").forEach(button => {
    button.addEventListener("click", () => {
      const product = products[button.dataset.index];
      document.getElementById("productModalLabel").textContent = product.name;
      document.getElementById("modalDescription").textContent = product.description;
      document.getElementById("modalPrice").textContent = product.price;
      document.getElementById("modalImage").src = product.image;
      productModal.show();
    });
  });
  
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll('.animated').forEach(el => {
    observer.observe(el);
  });
  