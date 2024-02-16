function calcularDescuento() {
    
    const producto1 = parseFloat(document.getElementById('producto1').value);
    const producto2 = parseFloat(document.getElementById('producto2').value);
    const producto3 = parseFloat(document.getElementById('producto3').value);
    const producto4 = parseFloat(document.getElementById('producto4').value);
    const producto5 = parseFloat(document.getElementById('producto5').value);
    
    
    if (isNaN(producto1) || isNaN(producto2) || isNaN(producto3) || isNaN(producto4) || isNaN(producto5)) {
      alert("");
      return;
    }
    
        //calculo subtotal
    const subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
    document.getElementById('subtotal').value = subtotal.toFixed(2);
    
    //descuentos
    let descuentoPorcentaje;
    if (subtotal < 1000) {
      descuentoPorcentaje = 0;
    } else if (subtotal < 5000) {
      descuentoPorcentaje = 10;
    } else if (subtotal < 9000) {
      descuentoPorcentaje = 20;
    } else if (subtotal < 13000) {
      descuentoPorcentaje = 30;
    } else {
      descuentoPorcentaje = 40;
    }
    document.getElementById('descuento').value = `Descuento ${descuentoPorcentaje}%`;
    
    // Aplicar el descuento al total
    const descuentoDecimal = descuentoPorcentaje / 100;
    const total = subtotal - (subtotal * descuentoDecimal);
    document.getElementById('total').value = total.toFixed(2);
  }
  
  function limpiarFormulario() {
    document.getElementById('descuentoForm').reset();
  }

  // alerta
  function alert(text) {
    Swal.fire({
        icon: "error",
        title: "Por favor, ingrese la cantidad correspondiente en los campos de producto.",
        text: text
    });
    }