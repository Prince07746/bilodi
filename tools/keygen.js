



function generateKey() {
    var key = '';
    var chars = '0123456789abcdefgklmnopqrstuwxyz';
    for (var i = 0; i < 32; i++) {
      var randomIndex = Math.floor(Math.random() * chars.length);
      key += chars.charAt(randomIndex);
    }
    return key;
  }
  
  // Example usage
  var keyProd = generateKey();

module.exports = {
    keyProd,
}