document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    // Limpa a mensagem de erro
    mensagemErro.textContent = "";

    // Verifica se as senhas coincidem
    if (senha !== confirmaSenha) {
        mensagemErro.textContent = "As senhas não coincidem.";
        return;
    }

    // Validações básicas de preenchimento de campos
    if (nome === "" || email === "" || senha === "") {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Aqui você pode adicionar mais validações ou enviar o formulário para o servidor
    alert("Cadastro realizado com sucesso!");
});
