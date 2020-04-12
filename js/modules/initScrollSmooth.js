export default function initScrollSmooth(){
  let menuItems = document.querySelectorAll('.navbar a[href^="#"]');
  
  menuItems.forEach((item) => {
    item.addEventListener('click', scrollToIdOnClick);
  });

  function scrollToIdOnClick(e){
    e.preventDefault();
    const element = e.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    window.scroll({
      top: to,
      behavior: 'smooth',
    });
  }

  $('.nav-link').on('click', function(){
    $('navbar-collapse').collapse('hide');
  });
  

  $('.section-site').each(function(){
    let height = $(this).height(),
    offsetTop = $(this).offset().top,
    menuHeight = $('.navbar').innerHeight(),
    id = $(this).attr('id'),
    $itemMenu = $('a[href="#'+ id +'"]');
    $(window).scroll(function(){
      let scrollTop = $(window).scrollTop();
      
      if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop){
        $itemMenu.addClass('active');
      } else {
        $itemMenu.removeClass('active');
      }
    });
  })
}