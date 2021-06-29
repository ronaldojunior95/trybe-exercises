function checkHighName(names){
    let name = names[0];
    for (let i = 0; i < names.length; i += 1){
        if (name.length < names[i].length){
            name = names[i];
        }
    }
    return name;
}
//teste
let a = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(checkHighName(a));