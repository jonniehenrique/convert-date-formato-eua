/**
 * Retorna data no formato EUA a partir do BR
 * 
 * @param {string} data
 * @param {string} separador
 * 
 */

function convertDataFormatoEUA(data, separador) {
    
    var dataArray   = data.split('/');
    var dataReverse = dataArray.reverse();
    var dataString  = dataReverse.toString();
        
    var dataFormat  = dataString.replace(/[^0-9]/g, separador);
        
    return dataFormat;
}