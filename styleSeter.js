function setStyle(newStyle){
  $('#bootstrapCss').remove();
  $('head').append('<link id="bootstrapCss" rel="stylesheet" href="/packages/style-picker/styles/' + newStyle + '.min.css" type="text/css" />');
}

Deps.autorun(function(){
  var style = Session.get('bsStyle')
  if(style){
    setStyle(style);
  }
})