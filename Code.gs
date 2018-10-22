function cambiarFormato() {
   var sheet = SpreadsheetApp.getActive().getSheetByName('Hoja 1');
   var b2 = sheet.getRange(1,2).getValue();
  //formato japones 
  /*var japones = Utilities.formatDate(new Date(b2), "GMT", "yyyy-MM-dd");
  Logger.log(japones);
  var europeo = Utilities.formatDate(new Date(b2), "GMT", "dd-MM-yyyy");
  Logger.log(europeo);
  var usa = Utilities.formatDate(new Date(b2), "GMT", "MM-dd-yyyy");
  Logger.log(usa);*/
  
  var tipoFecha= sheet.getRange(1, 1).getValue();
  switch(tipoFecha){
    case tipoFecha =="europea":
       var europeo = Utilities.formatDate(new Date(b2), "GMT+1","yyyy/MM/dd");
       sheet.getRange(2,2).setValue(europeo);
      break;
    case tipoFecha == "usa": 
      var usa = Utilities.formatDate(new Date(b2), "GMT+1", "yyyy/MM/dd");
     sheet.getRange(2,2).setValue(usa);
      break;
    case tipoFecha=="japonesa":
      var japones = Utilities.formatDate(new Date(b2), "GMT+1", "yyyy/MM/dd");
      sheet.getRange(2,2).setValue(japones);
      break;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
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
