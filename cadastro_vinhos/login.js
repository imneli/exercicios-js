function logar() {
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert("Sucesso!");
        location.href = "index.html";
    } else {
        console.log("Erro na senha");
        alert('Usuario ou Senha Incorretos');
    }
}