function loading(action)
{
  if(action == "show")
  {
    var loading_component = "<div class='loading-component'><img src='" + base_url("images/loading.svg") + "'><div class='overlay'></div></div>";
    $("body").append(loading_component);
  }
  else if(action == "hide")
  {
    $("body .loading-component").remove();
  }
}