function cambiarFormato() {
   var sheet = SpreadsheetApp.getActive().getSheetByName('Hoja 1');
   var b2 = sheet.getRange(1,2).getValue();
  //recogerFecha obtiene la fecha que el "cliente" otorga para su cambio de formato
  var recogerFecha= sheet.getRange(1,2,sheet.getLastRow(),1).getValues();
  //Logger.log(recogerFecha);
  var tipoFecha= sheet.getRange(1, 1).getValue();
       
   //for que recorre el cambio y el pintar la fecha en la otra casilla.     
      for(var i = 0; i < recogerFecha.length; i++){
                var pintaFecha = Utilities.formatDate(new Date(recogerFecha[i]), "GMT+1","yyyy/MM/dd");
                var fila = i+1;              
                sheet.getRange(fila, 3).setValue(pintaFecha);
                 Logger.log(pintaFecha);
                 sheet.getRange(fila,4).setBackground("#82E0AA").setValue("fecha modificada")
          }
              
              switch(tipoFecha){
                case "japonesa":
                  
                break;
                case "usa":
                  
                break;
                case "europea":
                  
                break;
              }
              sheet.getRange(3,1).setBackground("#D6EAF8").setValue("F.Internacional");
              sheet.getRange(2,1).setBackground("#D6EAF8").setValue("YYYY/MM/DD");
              
          
          
          
          
     /*     
      Logger.log(recogerFecha);
      break;
    case tipoFecha == "usa":
       for(var i = 0; i < recogerFecha.length; i++){
       var cambioStr= String(recogerFecha[i]);
         var usa = Utilities.formatDate(new Date(cambioStr), "GMT+1", "yyyy/MM/dd");
         sheet.getRange(1,3,1,sheet.getLastColumn()).setValue(usa);
       }
      break;
    case tipoFecha=="japonesa":
      for(var i = 0; i < recogerFecha.length; i++){
      var cambioStr= String(recogerFecha[i]);
      var japones = Utilities.formatDate(new Date(cambioStr), "GMT+1", "yyyy/MM/dd");
      sheet.(1,3,1,sheet.getLastColumn()).setValue(japones);
      }
      break;
  }
  
  */

  
  //formato japones 
  /*var japones = Utilities.formatDate(new Date(b2), "GMT", "yyyy-MM-dd");
  Logger.log(japones);
  var europeo = Utilities.formatDate(new Date(b2), "GMT", "dd-MM-yyyy");
  Logger.log(europeo);
  var usa = Utilities.formatDate(new Date(b2), "GMT", "MM-dd-yyyy");
  Logger.log(usa);*/
  
  
  /*
  if(tipoFecha=="usa" || tipoFecha=="europeo" || tipoFecha=="japones"){
     var usa = Utilities.formatDate(new Date(b2), "GMT+1", "yyyy/MM/dd");
     sheet.getRange(2,2).setValue(usa);
    //logger.log(usa);
  }*/
  /*else{
    if(tipoFecha=="europeo"){
     var europeo = Utilities.formatDate(new Date(b2), "GMT+1","yyyy/MM/dd");
      sheet.getRange(2,2).setValue(europeo);
      //logger.log(europeo);
    }else{
      var japones = Utilities.formatDate(new Date(b2), "GMT+1", "yyyy/MM/dd");
      sheet.getRange(2,2).setValue(japones);
      //Logger.log(japones);
    }
  }*/
}
