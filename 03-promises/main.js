const cep_input = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const complemento = document.getElementById("complemento");
const bairro = document.getElementById("bairro");
const localidade = document.getElementById("localidade");
const uf = document.getElementById("uf");
const cep_error = document.getElementById("cep-error");

cep_input.addEventListener("blur", function() {
    const cep = this.value.replace(/\D/g, "");
    get_data(`http://viacep.com.br/ws/${cep}/json/`)
    .then(function (data) {
        const obj = JSON.parse(data);
        if (obj.erro === true) {
            return error;
        }
        cep_input.value = cep;
        logradouro.value = obj.logradouro;
        complemento.value = obj.complemento;
        bairro.value = obj.bairro;
        localidade.value = obj.localidade;
        uf.value = obj.uf;
        cep_error.style.display = "none";
        cep_input.classList.remove("error");
    })
    .catch(function (error) {
        cep_error.style.display = "block";
        cep_input.classList.add("error");
    })
});
