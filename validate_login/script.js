function logar() {
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert("Sucesso!");
        location.href = "home.html";
    } else {
        console.log("erro na senha");
        alert('usuario ou senha incorretos');
    }
}