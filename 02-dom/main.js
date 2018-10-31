const input = document.getElementById("cpf");

input.addEventListener("focus", function(){
    this.value = "___.___.___-__";
    const that = this;
    setTimeout(function() {
        that.setSelectionRange(0, 0);
    }, 10);
})

input.addEventListener("blur", function(){
    this.value = "";
})

input.addEventListener("keydown", function(e){
    e.preventDefault();
    if ("0123456789".indexOf(e.key) !== -1 && this.value.indexOf("_") !== -1) {
        this.value = this.value.replace(/_/, e.key);
        const next_index = this.value.indexOf("_");
        this.setSelectionRange(next_index, next_index);
    } else if (e.key === "Backspace") {
        this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_");
        const next_index = this.value.indexOf("_");
        this.setSelectionRange(next_index, next_index);
    }
})