function validar() {
    var txtpais = document.getElementById('txtp');
    var res = document.querySelector('div#res');
    res.innerHTML = `<p>O seu País é ${txtpais}`;

    if(txtp === 'Brasil') {
        res.innerHTML += `<p>Você é <strong>Brasileiro!</strong></p>`;
    }
    res.innerHTML += `<p>Você é <strong>Estrangeiro!</strong></p>`;
}