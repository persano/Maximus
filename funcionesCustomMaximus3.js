function abrirPopUp(e) {
    window.open(e, "", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, width=450, height=280, top=85, left=-140")
}

function exportarPedidosExcel(e) {
    var a = $("#data").val();
    "" != a && JSONToCSVConvertor(a, e, !0)
}

function enviarMailConsulta(e, a) {
    var t = document.getElementById("cuerpo").value;
    funSendEMail("Sitio Web", e, "", "", "Consulta sobre Pedido Nº " + a, t)
}

function funSendEMailUserFunction(e, a) {}

function funNOSendEMailUserFunction(e, a) {}

function getFechaActual() {
    var e = new Date,
        a = e.getDate(),
        t = e.getMonth() + 1,
        o = e.getFullYear();
    return a < 10 && (a = "0" + a), t < 10 && (t = "0" + t), e = a + "-" + t + "-" + o
}

function getFechaActualAlt() {
    var e = new Date,
        a = e.getDate(),
        t = e.getMonth() + 1,
        o = e.getFullYear();
    return a < 10 && (a = "0" + a), t < 10 && (t = "0" + t), e = o + "-" + t + "-" + a
}

function getFechaMesAnterior() {
    var e = new Date,
        a = e.getDate(),
        t = e.getMonth(),
        o = e.getFullYear();
    return 0 == t && (t = 12), 12 == t && (o -= 1), a < 10 && (a = "0" + a), t < 10 && (t = "0" + t), e = a + "-" + t + "-" + o
}

function getFechaSeisMeses() {
    var e = new Date,
        a = e.getDate(),
        t = e.getMonth(),
        o = e.getFullYear();
    return (t -= 6) <= 0 && (t = 12 + t, o -= 1), a < 10 && (a = "0" + a), t < 10 && (t = "0" + t), e = a + "-" + t + "-" + o
}

function getFechaMesAnteriorAlt() {
    var e = new Date,
        a = e.getDate(),
        t = e.getMonth(),
        o = e.getFullYear();
    return 0 == t && (t = 12), 12 == t && (o -= 1), a < 10 && (a = "0" + a), t < 10 && (t = "0" + t), e = o + "-" + t + "-" + a
}

function getFechaSeisMesesAlt() {
    var e = new Date,
        a = e.getDate(),
        t = e.getMonth(),
        o = e.getFullYear();
    return (t -= 6) <= 0 && (t = 12 + t, o -= 1), a < 10 && (a = "0" + a), t < 10 && (t = "0" + t), e = o + "-" + t + "-" + a
}

function getDateyyymmdd(e) {
    if ("undefined" == e || "" == e) return "";
    var a = (e = e.split("-"))[0],
        t = e[1];
    return e[2] + "-" + t + "-" + a
}

function getDateddmmyyyy(e) {
    return "undefined" == e || "" == e ? "" : (e = e.split("-"))[2] + "-" + e[1] + "-" + e[0]
}

function stringToDate(e) {
    var a = e.split("-");
    return new Date(a[2], a[1] - 1, a[0])
}

function sumarDiasAFecha(e, a) {
    var t = e;
    return t.setDate(t.getDate() + a), t
}

function reload() {
    window.location.reload()
}
var itemTitTemp, itemImgTemp, itemPrecio;

function agregarACarritoCantidadListado(e, a, t, o) {
    if (itemTitTemp = a, itemImgTemp = t, itemPrecioTemp = o, cantItems = $("#cant" + e).val(), cantItems > 0 && "" != cantItems) return funAddCartBulk(e, cantItems), funCalculate(), !1
}

function agregarACarritoCantidad(e) {
    if (funLoading(1), cantItems = $("#caja_cantidad").val(), cantItems > 0 && "" != cantItems) return funAddCartBulk(e, cantItems), funCalculate(), !1;
    funLoading(0)
}

function agregarACarrito(e, a, t) {
    itemTitTemp = $("#COD" + e).text(), itemImgTemp = a, itemPrecioTemp = t, funAddCart(e), funCalculate()
}

function funAddCartUserFunction(e, a) {
    -1 != e ? ($("#modalcompra .modal-header").html("<h5 class='modal-title' id='exampleModalLabel'>¡Se agregó el producto a tu carrito!</h5>"), $("#modalcompra .modal-body").html("<img src='" + itemImgTemp + "' style='width:80px; height:auto; float:left;'> <b>" + itemTitTemp + "<br />" + itemPrecioTemp + "</b><br />"), itemTitTemp = "", itemImgTemp = "") : $("#modalcompra .modal-body").html("Ha habido un problema y el producto no pudo ser agregado a tu carrito:<br>" + a), $("#modalcompra").modal("show")
}

function funNOAddCartUserFunction(e, a) {
    -1 == e && ($("#modalMensaje .modal-header").html("<h5 class='modal-title' id='exampleModalLabel'>El producto no ha sido agregado a su carrito</h5>"), $("#modalMensaje .modal-body").html("Ha habido un problema y el producto no pudo ser agregado a tu carrito.")), $("#modalMensaje ").modal("show")
}

function cambiarDeliveryLogin(e) {
    funLoading(1), funSetSessionVariable("DL", "0"), funDelivery(e)
}

function cambiarSaleTermLogin(e) {
    funLoading(1), funSetSessionVariable("ST", "0"), funSalesTerms(e)
}

function cambiarPlanDePagos(e) {
    funLoading(1), funSetSessionVariable("CCP", "0"), funCreditCardLoanPlan(e)
}

function cambiarSaleTerm(e) {
    funLoading(1), funSetSessionVariable("ST", e), funSalesTerms(e)
}

function cambiarPlanDePagos(e) {
    funLoading(1), funSetSessionVariable("CCP", e), funCreditCardLoanPlan(e)
}

function funNOCreditCardLoanPlanSuccessUserFunction(e, a) {
    $("#modalMensaje .modal-header").html("<h5 class='modal-title' id='exampleModalLabel'>Error al seleccionar plan de pagos</h5>"), $("#modalMensaje .modal-body").html(a), $("#modalMensaje ").modal("show"), funSetSessionVariable("CCP", "0"), funLoading(0)
}

function cambiarPlanDePagos(ccpID,privatekey,publickey){
   funLoading(1);
   if($("#ccp_"+ccpID).data("decidir")=="True"){
	     $("#modalDecidir ").modal('show');
		 $("#privatekey").val(privatekey);
		 $("#publickey").val(publickey);
   }
   funSetSessionVariable('CCP',ccpID);
   funCreditCardLoanPlan(ccpID);
}

function funCreditCardLoanPlanSuccessUserFunction(e, a) {
    window.location.reload().delay(2e3)
}

function funSalesTermsUserFunction(e, a) {
    $("#tienePlanDePago").val($("#st_" + e + "_CCP").val())
}

function funNOSalesTermsSuccessUserFunction(e, a) {
    $("#modalMensaje .modal-header").html("<h5 class='modal-title' id='exampleModalLabel'>Error al seleccionar la forma de pago</h5>"), $("#modalMensaje .modal-body").html(a), $("#modalMensaje ").modal("show"), funSetSessionVariable("ST", "0"), funLoading(0)
}

function funCalculateUserFunction() {
    var e = $("#hidCartItemsQty").val(),
        a = $("#hidCartTotalTax").val(),
        t = $("#hidCartSubTotal").val(),
        o = $("#hidCartTotal").val(),
        n = $("#hidCartInterest").val(),
        i = $("#hidCartDiscount").val();
    $("#contador").html(e), $("#contador2").html(e), $("#montoCarrito").html(o), $("#montoCarrito2").html(o), -1 == $(location).attr("href").indexOf("CHECKOUT") && -1 == $(location).attr("href").indexOf("NPS") || ($("#txtItemsQty").html(e), $("#txtSubTotal").html(t), $("#txtInteres").html(n), $("#txtDescuento").html(i), "0.00" != $("#hidCartInterest").val() ? $("#interes_tr").css("display", "") : $("#interes_tr").css("display", "none"), "0.00" != $("#hidCartDiscount").val() ? $("#descuento_tr").css("display", "") : $("#descuento_tr").css("display", "none"), $("#txtTotalTaxes").html(a), $("#txtTotal").html(o)), funLoading(0)
}

function funLoading(e) {
    1 == e ? $(".loading").css("display", "block") : $(".loading").css("display", "none")
}

function countCarrito() {
    var e = $("#contador").text();
    return e = void 0 === e ? 0 : parseInt(e)
}

function funComparaCB(e, a) {
    $("#compacb" + e).is(":checked") ? ($("#comparaid" + e).html("<a href='" + a + "' class='linkcompara'>Ver comparación</a>"), $("#compara-box-" + e).removeClass("compara-box0"), $("#compara-box-" + e).addClass("compara-box1"), funAddItem4Compare(e)) : ($("#comparaid" + e).html("Comparar"), $("#compara-box-" + e).removeClass("compara-box1"), $("#compara-box-" + e).addClass("compara-box0"), funDeleteItem4Compare(e))
}

function JSONToCSVConvertor(e, a, t) {
    var o = "object" != typeof e ? JSON.parse(e) : e,
        n = "";
    if (n += a + "\r\n\n", t) {
        var i = "";
        for (var r in o[0]) i += r + ";";
        n += (i = i.slice(0, -1)) + "\r\n"
    }
    for (var s = 0; s < o.length; s++) {
        i = "";
        for (var r in o[s]) i += " " + o[s][r] + " ;";
        i.slice(0, i.length - 1), n += i + "\r\n"
    }
    if ("" != n) {
        var l = a.replace(/ /g, "_"),
            d = "data:text/csv;charset=utf-8," + escape(n),
            c = document.createElement("a");
        c.href = d, c.style = "visibility:hidden", c.download = l + ".csv", document.body.appendChild(c), c.click(), document.body.removeChild(c)
    } else alert("Invalid data")
}

function recomendarProducto() {
    $("#mensaje_suscrip").text(""), $("#modalrecomendar").modal("show")
}

function mostrarMediosPago() {
    $("#modalmediosdepago").modal("show")
}! function(e) {
    "use strict";
    e.fn.equalHeight = function() {
        var a = [];
        return e.each(this, function(t, o) {
            var n, i = e(o);
            n = "border-box" === i.css("box-sizing") || "border-box" === i.css("-moz-box-sizing") ? i.innerHeight() : i.height(), a.push(n)
        }), this.css("height", Math.max.apply(window, a) + "px"), this
    }, e.fn.equalHeightGrid = function(a) {
        var t = this.filter(":visible");
        t.css("height", "auto");
        for (var o = 0; o < t.length; o++)
            if (o % a == 0) {
                for (var n = e(t[o]), i = 1; i < a; i++) n = n.add(t[o + i]);
                n.equalHeight()
            }
        return this
    }, e.fn.detectGridColumns = function() {
        var a = 0,
            t = 0;
        return this.filter(":visible").each(function(o, n) {
            var i = e(n).offset().top;
            if (0 !== a && i !== a) return !1;
            t++, a = i
        }), t
    };
    var a = 0;
    e.fn.responsiveEqualHeightGrid = function() {
        var t = this,
            o = ".grids_" + a;

        function n() {
            var e = t.detectGridColumns();
            t.equalHeightGrid(e)
        }
        return t.data("grids-event-namespace", o), e(window).bind("resize" + o + " load" + o, n), n(), a++, this
    }, e.fn.responsiveEqualHeightGridDestroy = function() {
        return this.css("height", "auto"), e(window).unbind(this.data("grids-event-namespace")), this
    }
}(window.jQuery), jQuery(function(e) {
    e(".owl-item .product .image").responsiveEqualHeightGrid(), e(".product .image").responsiveEqualHeightGrid(), e(".product h4").responsiveEqualHeightGrid(), e(".product h4 a").responsiveEqualHeightGrid(), e(".product .description").responsiveEqualHeightGrid(), e(".product").responsiveEqualHeightGrid(), e(".owl-item").responsiveEqualHeightGrid(), e(".owl-item .product div.image").responsiveEqualHeightGrid(), e(".owl-item .product div.description h4").responsiveEqualHeightGrid(), e(".owl-item .product div.price").responsiveEqualHeightGrid(), e(".imagenitemarmado").responsiveEqualHeightGrid(), e(".elementoclass").responsiveEqualHeightGrid()
}), $(document).ready(function() {
    switch ($("a.6").css("display", "none"), $("nav > li:odd > a").addClass("color1"), logono2(), $("li.masopciones > a").click(function() {
        $(this).toggleClass("expand").toggleClass("collapsed").parent().find("> ul.masop").slideToggle("fast")
    }), $("a.cateaux").hover(function() {
        $(".modalMenu").css("background-image", "url(" + $(this).attr("name") + ")")
    }), $("#orden1").change(function() {
        funSetSessionVariable("orden", $("select[id=orden1] option:selected").val()), window.location.reload().delay(3e3)
    }), $("#cantmostrar").change(function() {
        funSetSessionVariable("cantidad", $("select[id=cantmostrar] option:selected").val()), setTimeout("reload()", 800)
    }), $("#setcaja").click(function() {
        funSetSessionVariable("caja", "1"), setTimeout("reload()", 800)
    }), $("#setlista").click(function() {
        funSetSessionVariable("caja", "2"), setTimeout("reload()", 800)
    }), "1" === global_caja && $("#setcaja").addClass("selected"), "2" === global_caja && $("#setlista").addClass("selected"), global_orden) {
        case "1":
            $("#orden1 option").eq(2).prop("selected", !0);
            break;
        case "2":
            $("#orden1 option").eq(3).prop("selected", !0);
            break;
        case "3":
            $("#orden1 option").eq(0).prop("selected", !0);
            break;
        case "4":
            $("#orden1 option").eq(1).prop("selected", !0);
            break;
        default:
            $("#orden1 option").eq(0).prop("selected", !0)
    }
    switch (global_cantidad) {
        case "12":
            $("#cantmostrar option").eq(0).prop("selected", !0);
            break;
        case "28":
            $("#cantmostrar option").eq(1).prop("selected", !0);
            break;
        case "52":
            $("#cantmostrar option").eq(2).prop("selected", !0);
            break;
        default:
            $("#cantmostrar option").eq(0).prop("selected", !0)
    }
}), $(document).ready(function() {
    $(".brand-carousel").slick({
        dots: !1,
        infinite: !0,
        speed: 4e3,
        arrows: !1,
        autoplay: !0,
        autoplaySpeed: 0,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1920,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 4,
                infinite: !0,
                dots: !1
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                infinite: !0,
                dots: !1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: !1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: !1
            }
        }]
    })
});
