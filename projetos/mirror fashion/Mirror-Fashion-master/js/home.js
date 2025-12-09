var clicado = false;
var clicadoVendidos = false;
/*
$('.novidades button').click(function() {
	$('.novidades').addClass('painel-aberto');
	
});

$('.mais-vendidos button').click(function(){
	$('.mais-vendidos').addClass('painel-aberto');

});
*/


$('.novidades button').click(function(){
	$('.novidades').toggleClass('painel-aberto');
	if(clicado){
		$('button#botaoMostra').text("Mostrar mais");
		clicado = false;
	} else {
		clicado = true;
		$('button#botaoMostra').text("Mostrar menos");
	}
});

$('.mais-vendidos button').click(function(){
	$('.mais-vendidos').toggleClass('painel-aberto');
	if(clicadoVendidos){
		$('button#mostraMais').text("Mostrar mais");
		clicadoVendidos = false;
	} else {
		clicadoVendidos = true;
		$('button#mostraMais').text("Mostrar menos");
	}
});


/*Pegando os dois eventos*/
/*
$('.painel button').click(function() {
	$(this).parent().toggleClass('painel-aberto');
});
*/