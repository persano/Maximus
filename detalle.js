$(document).ready(function() {
	$(".tdet").click(function(){
		$("#detalle_tarjetas").fadeIn("slow");
	})
	$("#detalle_tarjetas").click(function(){
		$(this).css("display","none")
	})

	var dtext= $('.dlarga').text();
	var dhtml= $('.dlarga').html();
		//debugger;
	if(dtext!="" || dhtml!="") {
		$('.prod_desc').show();
	}
	if($('.cajaprod').length !=0) {
		$('.prod_relac').show();
	}

})


$("#recomendar").click(function(){
	$("#mensaje_suscrip").text("");
	$(".form_recom").toggle();
})

$("#formRecom").submit(function(){
	var strRemitente = $("#recom_remitente").val();
	var strDestinoNombre = $("#recom_destinatarioNombre").val();
	var strDestinoEmail = $("#recom_destinatarioEmail").val();
	var strDestino = $("#recom_destinatarioNombre").val();
	var strTitulo = $("#recom_titprod").val();
	var strImagen = $("#recom_imgprod").val();
	var strUrl = $("#recom_urlprod").val();
	var strLogoTop = urlimagenes + "logoTop"+global_empresa_nombre +".png";
	var strUrlSitio = urlbegin + "HOME/inicio/" + urlend;
	var strMensaje = $("#recom_mensaje").val();
	var strSubject = "Hola " + strDestinoNombre + ". Tu amigo " + strRemitente + " te recomienda ver un producto."

	var strBodyMail = "<div style='font:normal 14px calibri'>";
	strBodyMail+="<div style='padding-bottom:20px; border-bottom:1px solid #ccc;'><a href='" + strUrlSitio + "'><img src='" + strLogoTop + "' border='0' /></a></div>";
	strBodyMail+="<div><p><b>" + strDestinoNombre + "</b></p><br></div>";
	strBodyMail+="<div>Tu amigo " + strRemitente + " te recomienda que veas el siguiente producto:<br></div>";
	strBodyMail+="<div><p style='color:#999999'><i>'" + strMensaje + "'</i></p><br></div>";
	strBodyMail+="<div><a href='" + strUrl + "'><img src='" + strImagen + "' align='left' style='margin-right:15px' /></a><h3 style='color:#FF150D'>" + strTitulo + "</h3><a style='color:#FF150D' href='" + strUrl + "'>Hac&eacute; click ac&aacute; para ver el producto.</a><br><br><br><br></div>";
	strBodyMail+="<div></div>";
	strBodyMail+="<br><br><br><br><br><br><br><br>";
	strBodyMail+="<div style='padding:10px; background:#f4f4f4'><b>" + global_empresa_nombre + "</b><br>";
	strBodyMail+= global_empresa_direccion + "<br>";
	strBodyMail+= "Teléfono: " + global_empresa_telefonos + "<br>";
	strBodyMail+= "Email: " + global_empresa_mail + "<br>";
	//strBodyMail+= "Horarios de atención: " + global_empresa_atencion+ "<br>";
	strBodyMail+= "</div>";	




	
	funLoading(1);
	funSendEMail (strRemitente ,strDestinoEmail , '', '', strSubject,strBodyMail)
	return false;
	/*
	if(strRemitente == "" || strDestinoNombre == "" || strDestinoEmail == "") {
		alert("Complete los campos correspondientes")
	} else {
		var b=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/
		
		if(! b.test(strDestinoEmail)){
			alert("Ingrese una dirección de correo válida")
		} else {
			funLoading(1);
			funSendEMail (strRemitente ,strDestinoEmail , '', '', strSubject,strBodyMail)
		}
	}
	*/

})


function funSendEMailUserFunction (intError,strErrorMessage) {
	if(intError == 0) {
		funLoading(1);
		$("#formRecom").reset();
		$(".form_recom").toggle();
		$("#mensaje_suscrip").text("La recomendación se envió con éxito.");
	} else {
		$("#mensaje_suscrip").text("La recomendación no pudo ser enviada.");
	}
}
function funNOSendEMailUserFunction (intError,strErrorMessage) {
	if(intError == 0) {
		funLoading(0);
		document.getElementById("formRecom").reset();		
		$(".form_recom").toggle();
		$("#mensaje_suscrip").text("La recomendación se envió con éxito.");
	} else {
		$("#mensaje_suscrip").text("La recomendación no pudo ser enviada.");
	}
}