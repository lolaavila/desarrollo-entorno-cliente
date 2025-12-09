function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
    return document.cookie
        .split("; ")
        .find(row => row.startsWith(name + "="))
        ?.split("=")[1] || "";
}

function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00;path=/`;
}

const regex = {
    nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    pass: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
    edad: /^\d+$/
};

function validar(input, tipo) {
    const msg = document.getElementById("msg-" + tipo);

    if (regex[tipo].test(input.value)) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");

        msg.textContent = "Correcto";
        msg.className = "msg msg-ok";

        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");

        msg.textContent = "Formato incorrecto";
        msg.className = "msg msg-error";

        return false;
    }
}

window.onload = () => {
    const user = getCookie("username");
    if (user) {
        document.getElementById("saludo").textContent = "Bienvenido de nuevo, " + user;
        document.getElementById("nombre").value = user;
    }
};

function help(id, text) {
    const input = document.getElementById(id);
    const msg = document.getElementById("msg-" + id);

    input.onfocus = () => msg.textContent = text;
    input.onblur = () => msg.textContent = "";
}

help("nombre", "Introduce solo letras y espacios.");
help("email", "Debe ser un correo electrónico válido.");
help("pass", "Mín. 8 caracteres, mayúscula, número y símbolo.");
help("edad", "Introduce solo números.");

["nombre", "email", "pass", "edad"].forEach(campo => {
    document.getElementById(campo).oninput = e => validar(e.target, campo);
});

document.getElementById("form").addEventListener("submit", e => {

    const campos = ["nombre", "email", "pass", "edad"];
    let ok = true;

    campos.forEach(c => {
        if (!validar(document.getElementById(c), c)) ok = false;
    });

    if (!ok) {
        e.preventDefault();
        alert("Corrige los errores antes de enviar.");
        return;
    }

    setCookie("username", document.getElementById("nombre").value, 7);
    alert("Formulario enviado correctamente");
});

document.getElementById("delCookie").onclick = () => {
    deleteCookie("username");
    alert("Cookie eliminada");
};
