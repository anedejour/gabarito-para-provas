var vetGabarito=[];
var vetNome=[];
var vetResposta=[];

function inserirGabarito(){
    var gabarito = document.getElementById("inGabarito").value;

    if(gabarito != "a" && gabarito != "b" && gabarito != "c" && gabarito != "d" && gabarito != "e"){
        alert("Resposta Inválida!");
        inGabarito.value="";
        inGabarito.focus();
        return;
    }
    vetGabarito.push(gabarito);

    inGabarito.value="";
    inGabarito.focus();

    if(vetGabarito.length > 10){
        alert("Máximo 10 notas!");
        return;
    }
    var questao=""; numero=1;
    for(var g=0; g<vetGabarito.length; g++){
        questao += numero + ". " + vetGabarito[g] + "\n";
        numero++
    }
    document.getElementById("result").innerText = questao + "\n";
}
var btInserirGabarito = document.getElementById("inserirGab");
btInserirGabarito.addEventListener("click", inserirGabarito);

function inserirResposta(){
    var resposta = document.getElementById("inResposta").value;

    if(resposta != "a" && resposta != "b" && resposta != "c" && resposta != "d" && resposta != "e"){
        alert("Resposta Inválida!");
        inResposta.focus();
        return;
    }
    vetResposta.push(resposta);
    inResposta.value="";
    inResposta.focus();

    if(vetResposta.length > 10){
        alert("Máximo 10 notas!");
        return;
    }
    var questao="", numero=1
    for(var r=0; r<vetResposta.length; r++){
        questao += numero + ". " + vetResposta[r] + "\n";
        numero++
    }
    document.getElementById("respostaAluno").innerText =  questao + "\n";
}
var btInserirNota = document.getElementById("inserir");
btInserirNota.addEventListener("click", inserirResposta);

function verificarNota(){
    var nome = document.getElementById("inNome").value;
    var nomeCandidato = nome.toUpperCase();

    vetNome.push(nome);
    inNome.value="";

    if(vetGabarito.length < 10 || vetResposta.length < 10){
        alert("Insira Todos os Dados");
        return
    }
var acerto=0, erro=0, soma=0

    for(var a=0; a<vetGabarito.length; a++){
        if(vetGabarito[a] == vetResposta[a]){
            acerto++
        }
        else{
            erro++
        }
        soma = (acerto*100)
    }
    var texto = "Avaliacao Final do Aluno: " + nomeCandidato + "\n"
    texto+= "Acertos: " + acerto + "\n";
    texto+= "Erros: " + erro + "\n";
    texto+= "Nota Final: " + soma + "\n";
    

    document.getElementById("respostaFinal").innerText = texto;
}
var btVerificar = document.getElementById("verificar");
btVerificar.addEventListener("click", verificarNota);