// jquery

$(function () {
    function obterTodos() {
        $.ajax({
            url: '/hospital/obtertodos',
            method: 'get',
            success: function (data) {

                for (var i = 0; i < data.length; i++) {
                    var dado = data[i];



                    var linha = document.createElement("tr");
                    var colunaCodigo = document.createElement("td");
                    colunaCodigo.innerHTML = dado.Id;

                    var colunaRazaoSocial = document.createElement("td");
                    colunaRazaoSocial.innerHTML = dado.RazaoSocial;

                    var colunaCNPJ = document.createElement("td");
                    colunaCNPJ.innerHTML = dado.Cnpj;

                    var colunaAcao = document.createElement("td");
                    var botaoEditar = document.createElement("button");
                    botaoEditar.innerHTML = "Editar";

                    var botaoApagar = document.createElement("button");
                    botaoApagar.innerHTML = "Apagar";

                    linha.appendChild(colunaCodigo);
                    linha.appendChild(colunaRazaoSocial);
                    linha.appendChild(colunaCNPJ);
                    linha.appendChild(colunaAcao);
                    document.getElementById("lista-hospitais").appendChild(linha);
                }
            },
            error: function (data) {
                alert("DEU RUIM");
            }
        })
    }




   
    $("#hospital-botao-salvar").on("click", function () {
        $nome = $("#campo-razao-social").val();
        $faturamento = $("#campo-faturamento").val();
        $cnpj = $("#campo-cnpj").val();
        $particular = $("#campo-privado").prop("checked");

        $.ajax({
            method: "post",
            url: "/hospital/store",
            data: {
                RazaoSocial: $nome,
                Faturamento: $faturamento,
                Cnpj: $cnpj,
                Particular: $particular
            },
            success: function (data) {
                $("#modalCadastroHospital").modal("hide");
                obterTodos();
                
                notice.on('pnotify.confirm', () => {
                    // User confirmed, continue here...
                });
                notice.on('pnotify.cancel', () => {
                    // User canceled, continue here...
                });
            },
            error: function (data) {
                console.log("ERRO");
            }
        })
        


    });
});

