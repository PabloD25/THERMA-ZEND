function cargarMercadoPagoJc500(){
    var script = document.createElement('script');
    script.src = 'https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js';
    script.setAttribute('data-preference-id', '277607563-1ba860ab-7399-4681-ab06-1d418bb6f645');
    script.setAttribute('data-source', 'button');
    document.body.appendChild(script);
}