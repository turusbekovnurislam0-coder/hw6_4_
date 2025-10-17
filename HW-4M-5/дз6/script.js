const form = document.getElementById("productForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const price = document.getElementById("price");
  const image = document.getElementById("image");

  let valid = true;

  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.querySelectorAll("input, textarea").forEach(el => el.classList.remove("invalid"));

  if (title.value.trim().length < 4) {
    document.getElementById("titleError").textContent = "Минимум 4 символа";
    title.classList.add("invalid");
    valid = false;
  }

  if (description.value.trim().length < 10) {
    document.getElementById("descriptionError").textContent = "Минимум 10 символов";
    description.classList.add("invalid");
    valid = false;
  }

  if (Number(price.value) <= 0 || isNaN(price.value)) {
    document.getElementById("priceError").textContent = "Введите положительное число";
    price.classList.add("invalid");
    valid = false;
  }

  try {
    new URL(image.value);
  } catch {
    document.getElementById("imageError").textContent = "Введите корректный URL";
    image.classList.add("invalid");
    valid = false;
  }

  if (valid) {
    alert("Форма успешно отправлена!");
    form.reset();
  }
});
