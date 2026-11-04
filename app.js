const root = document.documentElement;
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano");
const form = document.getElementById("formInscricao");
const mensagem = document.getElementById("mensagem");

ano.textContent = new Date().getFullYear();

btn.setAttribute("aria-pressed", String(root.getAttribute("data-tema") === "escuro"));

btn.addEventListener("click", () => {
  const escuro = root.getAttribute("data-tema") === "escuro";

  if (escuro) {
    root.removeAttribute("data-tema");
  } else {
    root.setAttribute("data-tema", "escuro");
  }

  try {
    localStorage.setItem("tema", escuro ? "claro" : "escuro");
  } catch (e) {}

  btn.setAttribute("aria-pressed", String(!escuro));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  mensagem.className = "mensagem";

  if (!form.checkValidity()) {
    form.reportValidity();
    mensagem.textContent = "Preencha seu nome e um e-mail válido.";
    mensagem.classList.add("erro");
    return;
  }

  const nome = form.elements["nome"].value.trim();

  mensagem.textContent = `Obrigado, ${nome}! Inscrição realizada.`;
  mensagem.classList.add("sucesso");
  form.reset();
});