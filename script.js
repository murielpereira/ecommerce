document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const textoHeader = document.querySelector("#texto-header");
 
    const textos = ["Frete grátis para todo o Brasil em compras acima de R$300", "Pagamentos no PIX recebem 5% de desconto!", "Faça seu pedido em até 3x sem juros"];
  
    textoHeader.textContent = textos[0];

    const timer = setInterval(() => {
      textoHeader.textContent = textos[Math.floor(Math.random() * textos.length)];
    }, 5000);
  });