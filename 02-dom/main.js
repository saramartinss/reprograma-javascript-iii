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

// input.addEventListener("keypress", function(e){
//     e.preventDefault();
//     cpf = Number.isInteger(parseInt(e.key));
//     if (cpf) {
//         input.value = input.value.replace(/_/, e.key);
//     }
// })

input.addEventListener("keyup", function(e){
    e.preventDefault();
    if ("0123456789".indexOf(e.key) !== -1 && this.value.indexOf("_") !== -1) {
        this.value = this.value.replace(/_/, e.key);
        const next_index = this.value.indexOf("_");
        this.setSelectionRange(next_index, next_index);
    }

})