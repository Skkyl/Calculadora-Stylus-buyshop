<script type="text/javascript">
	// quando enviar o form
	document.getElementById('submit').onclick = function(e) {
		// var do form
		var larg = document.getElementById('larg').value;
		var alt = document.getElementById('alt').value;

		// aritmetica
		var calc = (larg * alt * 4) + 1;
		var placas = Math.ceil(calc);
		// alert (placas);

		// sumir form1 
		document.getElementById('form1').style.display = 'none';

		// aparecer o form2
		document.getElementById('form2').style.display = 'block';

		// mostrar o resul da aritmetica
		document.getElementById('resul').innerHTML = placas + ' placas';

		// impedir o form se enviado
		e.preventDefault();
	}

	// funct abrir form
	function popup() {
		document.getElementById('form1').style.display = 'block';
		document.getElementById('pop-up').style.display= 'none';
		document.getElementById('bg').style.display = 'block';
	}
</script>