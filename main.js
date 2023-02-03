$().load(() => {
      $('#tgbtn').event('click', async () => {
            const navClass = $('.nav').hasClass('active')

            if (navClass) { 
                  $('.nav').removeClass('active')
            } else {
                  $('.nav').addClass('active')
            }
      })
})