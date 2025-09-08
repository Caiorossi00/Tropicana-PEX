const botoesExpandir = document.querySelectorAll(".expandir");

botoesExpandir.forEach((botao) => {
  botao.addEventListener("click", () => {
    const resposta = botao
      .closest(".pergunta")
      .querySelector(".pergunta-resposta");
    const estiloComputado = window.getComputedStyle(resposta);

    if (estiloComputado.display === "none") {
      resposta.style.display = "block";
    } else {
      resposta.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".mais-informações");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const categoria = this.getAttribute("data-categoria");
      const mensagem = encodeURIComponent(
        `Olá, estou interessado nos itens da categoria: ${categoria}`
      );
      const whatsappLink = `https://wa.me/5521999717653/?text=${mensagem}`;
      window.open(whatsappLink, "_blank");
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
