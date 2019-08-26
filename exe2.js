function funcao(){
    var vet = []
    for(var i=0; i<3;i++){
        var objeto = {}
        // coloca dados no objeto
        objeto.salario = Number(prompt("Salário"))
        objeto.idade = Number(prompt("Idade"))
        objeto.filhos = Number(prompt("Filhos"))
        objeto.sexo = Number(prompt("Sexo"))
        // coloca objeto no vetor
        vet.push(objeto)
    }
    var somaSalario = 0
    var somaFilhos = 0
    var maiorSalario = vet[0].salario
    for(var i=0;i<vet.length;i++){
        somaSalario = somaSalario + vet[i].salario
        somaFilhos = somaFilhos + vet[i].filhos
        if (vet[i].salario > maiorSalario){
            maiorSalario = vet[i].salario
        }
    }
    alert("Média salarial " + somaSalario/vet.length)
    alert("Média de filhos " + somaFilhos/vet.length)
    alert("Maior salário " + maiorSalario)
}