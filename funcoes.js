function limpaDados() {
    document.getElementById('nomeD').value = '';
	document.getElementById('senhaD').value = '';
	document.getElementById('sexoD').value = 'Masculino';
	document.getElementById('telefoneD').value = '';
	document.getElementById('celularD').value = '';
	document.getElementById('fumanteD').value = 'Sim';
	document.getElementById('dataD').value = 'dd/mm/aaaa';
	document.getElementById('municipioD').value = '';
    document.getElementById('emailD').value = '';
}
function limpaCadastro() {
	document.getElementById('nome').value = '';
	document.getElementById('senha').value = '';
	document.getElementById('sexo').value = 'Masculino';
	document.getElementById('telefone').value = '';
	document.getElementById('celular').value = '';
	document.getElementById('fumante').value = 'Sim';
	document.getElementById('dataE').value = 'dd/mm/aaaa';
	document.getElementById('municipio').value = '';
    document.getElementById('email').value = '';
}
function cadastrar() {
	document.getElementById('nomeD').value = document.getElementById('nome').value;
	document.getElementById('senhaD').value = document.getElementById('senha').value;
	document.getElementById('sexoD').value = document.getElementById('sexo').value;
	document.getElementById('telefoneD').value = document.getElementById('telefone').value;
	document.getElementById('celularD').value = document.getElementById('celular').value;;
	document.getElementById('fumanteD').value = document.getElementById('fumante').value;;
	document.getElementById('dataD').value = document.getElementById('dataE').value;
	document.getElementById('municipioD').value = document.getElementById('municipio').value;;
    document.getElementById('emailD').value = document.getElementById('email').value;;
}

