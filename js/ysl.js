$(document).ready(function(){
  slider(".col_bxslider",true,'.colPager',1000);
  slider(".sus_bxslider",false,'.susPager',1000);
  panelClick(".sideicon form fieldset input");
  panelClick("footer > :first-of-type > ul li input");
  gnbAccordion("header > .wrap nav ul li mark");
  gnbAccordion("header > .wrap nav ul li .gnb_wrap ol:not(.style) :first-child");
  panelClick("section.listContainer > div:nth-child(4) input[type='button']");
  gnbAccordion("section.listContainer > #filterPanel > form fieldset legend");
  productList("section.listContainer > ul > li > ol li","section.listContainer > ul > li:not(.breakPoint) img");
  pager(".pager > ol > li");
  gnbAccordion(".detailContainer > aside > ul > li")
  tabProduct(".detailContainer > div:last-child > ul > li",".detailContainer > div:last-child > div","data-product");
  slider(".mobile_bxslider",false,".mobile_Pager",500);
  elementsNumb(".detailContainer > aside > ol");
  tabProduct(".mywishListBox+div > ul > li",".mywishListBox+div > div","data-product");
  tabProduct(".mycartBox+div > ul > li",".mycartBox+div > div","data-product");
  tabProduct(".myorderBox+div > ul > li",".myorderBox+div > div","data-product");
  deleteCard(".mywishListBox > div > ul:last-of-type li input[type='button']:first-of-type");
  deleteCard(".mycartBox > div > ul:last-of-type li > input[type='button']");
  deleteCard("header > .panel > #wishPanel ul li input[type='button']");
  deleteCard("header > .panel > #cartPanel ul li input[type='button']");
  panelClick(".mywishListBox > div > input[type='button']");
  panelClick(".mywishListBox > div > ul:last-of-type > li > input:button[value='ADD TO BAG']");
  popupClick('[data-popup]');
  deleteInfo(".myAddressBox > div > ul:last-of-type > li:first-child > input:button[value='delete']");
  deleteInfo(".myAddressBox > div > ul:last-of-type > li:nth-child(2) > input:button[value='delete']");
  deleteInfo(".myPaymentBox > div > ul:last-of-type > li:first-child > input:button[value='delete']");
  deleteInfo(".myPaymentBox > div > ul:last-of-type > li:nth-child(2) > input:button[value='delete']");
  tabProduct("section.sustainContainer > aside > ul > li","section.sustainContainer > ul > li","data-sustain");
  checkOutNext();
  numberOnly();
  slipDown(".storeContainer > div > section > div:first-child > div > dl > dd:last-child > b");
  slipDown("[class*='_Area']:not(.legal_kering_Area) > div > section > ol > li > b");
  gnbAccordion("div#cookies > ul > li > b");
  viewMore();
  $("#map").fitVids({customSelector: "iframe[src^='https://www.google.com/maps/embed']"});
});
function slider(target,cap,pager,speed){
  $(target).bxSlider({
    speed: speed,
    adaptiveHeight: true,
    adaptiveHeightSpeed: 1000,
    shrinkItems: false,
    easing: 'ease-in-out',
    captions: cap,
    pagerCustom: pager
  });
}
function panelClick(openBtn){
  var currentPanel = null;
  $(openBtn).click(function(){
    $(this).toggleClass("active");
    currentPanel = "#"+$(this).attr("data-panel");
    $(currentPanel).toggleClass("active");
  });
  $(".btn_close").click(function(){
    $(currentPanel).removeClass("active");
  });
}
function gnbAccordion(target){
  $(target).click(function(){
      $(this).toggleClass("active")
  });
}
function productList(colorBtn,targetImg){
  var currentImgName = '';
  $(colorBtn).click(function(){
    currentImgName="images/"+$(this).attr("data-src")+".png";
    currentColorName=$(this).attr("data-src");
    $(colorBtn).removeClass("active");
    $(this).addClass("active");
    $(this).closest('ol').siblings('img').attr("src",currentImgName);
  });
  $(targetImg).hover(function(){
    $(this).attr("src",$(this).attr("src").replace(".png","_hover.png"));
  },function(){
    $(this).attr("src",$(this).attr("src").replace("_hover.png",".png"));
  });
}
function pager(page){
  $(page).click(function(){
    $(page).removeClass("active");
    $(this).addClass("active");
  });
}
function tabProduct(target,openTab,property){
  $(target).click(function(){
    var activeTab="#"+$(this).attr(property);
    $(target).removeClass("activated");
    $(this).addClass("activated");
    $(openTab).removeClass("activated");
    $(activeTab).addClass("activated");
  });
}
function elementsNumb(target){
  var count=$(target).length;
  $(target).removeClass('alone','first','second');
  if(count==1){
    $(target).addClass('alone');
  }else if(count==2){
    $(target).eq(0).addClass('first');
    $(target).eq(1).addClass('second');
  }
}
function deleteCard(deleteBtn){
  $(deleteBtn).click(function(){
    var activePage="#"+$(this).attr("data-card");
    $(deleteBtn).closest("ul").addClass("deactive");
    $(activePage).addClass("active");
  });
}
function popupClick(openBtn){
  var currentPopup = null;
  $(openBtn).click(function(e){
    console.log(e);
    currentPopup = "#"+$(this).attr("data-popup");
    $(currentPopup).addClass("active");
  });
  $(".btn_close").click(function(e){
    console.log($(this).closest('[id]'));
    e.preventDefault();
    $(this).closest('[id]').removeClass("active");
  });
}
function deleteInfo(deleteBtn){
  $(deleteBtn).click(function(){
    $(deleteBtn).closest("li").addClass("deactive");
  });
}
function checkOutNext(){
  $(".ck_shippingTab input.nextBtn").click(function(){
    var $a=$(this).closest("fieldset");
    var $b=$a.siblings("div");
    var $c=$(this).closest("div").siblings("div").children("fieldset");

    $a.slideUp();
    $b.addClass("active");
    $c.slideDown();
  });
  $(".ck_shippingTab input.beforeBtn").click(function(){
    var $a=$(this).closest("div");
    var $b=$a.siblings("fieldset");
    var $c=$a.parent("div").siblings("div").children("fieldset");
    
    $a.removeClass("active");
    $b.slideDown();
    $c.slideUp();
  });
}
function numberOnly(){
  $("input.numberOnly").on("keyup",function(){
    $(this).val($(this).val().replace(/[^0-9]/g,""));
  });
}
function slipDown(openBtn){
  $(openBtn).click(function(){
    var $downer=$(this).siblings();
    $(this).toggleClass("active");
    $downer.slideToggle();
  });
}
function viewMore(){
  $("[class*='lookBook'] > input[type='button']").click(function(){
    $(this).siblings("ul:last-of-type").slideToggle();
    if($(this).val()=='VIEW ALL'){
      $(this).val('VIEW LESS');
      $("[class*='lookBook'] > ul:first-of-type").addClass("viewAll");
    }else{
      $(this).val('VIEW ALL');
      $("[class*='lookBook'] > ul:first-of-type").removeClass("viewAll");
    }
  });
}