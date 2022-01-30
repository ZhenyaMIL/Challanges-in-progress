$(document).ready(function () {

    
    let allBlockChallanges = $(".challanges__item");
    let a = $(".progress_bar");
    $(a).each(function () {
        let progressText = $(this).find("p").text();
        let progressValue = $(this).find(".value_of_progress");

        $(progressValue).animate({
            height: '100%',
            width: `${progressText}`
        }, 1100);


    })

    $(".img").each(function () {
        $(this)
            .click(function () {
                $(this).addClass('animate');
            })

            .on("animationend", function () {
                $(this).removeClass('animate');
            });


    })

    $(allBlockChallanges).each(function(){
      
        let lastDayValue = $(this).find(".status").attr("date-end");
        let showDeadline = $(this).find(".status");
        let checkIfSuccessfulyDone = $(this).find(".status").attr("successfuly");
        
        

        let today = new Date();
        let lastDay = new Date(convert_date_format(`${lastDayValue}`));
        let dateDiff = new Date(lastDay - today);
        let roundNumber = parseInt(((dateDiff / 1000 / 60 / 60 / 24) + 1).toFixed());

        if(roundNumber === 0){
            showDeadline.text(`До конца текущего дня!`);
        }
        if(roundNumber < 0){
            

            if(checkIfSuccessfulyDone === "yes"){
                showDeadline.text(`Выполнено успешно!`);
            }
            if(checkIfSuccessfulyDone === "no"){
                showDeadline.text(`Просрочено!`);
            }


        }
        if(roundNumber > 0){
            showDeadline.text(`Дедлайн через: ${roundNumber} дней`);
        }

        
    })
    

    function convert_date_format(date_string) {
        let date = date_string.split('.', 3);

        return date[1] + '/' + date[0] + '/' + date[2];
    }

    $(".filter div").each(function(){
        $(this).click(function(){
            //Clear class
            $(".filter div").each(function(){
                $(this).removeClass('applyFilter')
            })
            //Clear class
            $(".challanges .status").each(function(){
                $('.challanges__item').removeClass("hide-card")
            })

            $(this).addClass('applyFilter');

            if($(this).text().trim() === "Активные"){
                console.log(1)
                $(".challanges .status").each(function(){
                    if($(this).attr('successfuly') !== ''){
                        $(this).closest('.challanges__item').addClass("hide-card")
                    }
                })
            } 
           

        })
    })



    let $button = $('#menu-btn');

$button.on('click', function(e){
    e.preventDefault();

    $(".menu_navigations").toggleClass("active");
    $(".all_challanges").toggleClass("hide");
    
  
   

    if( $button.hasClass('open') ){
      $button.removeClass('open');
      $button.addClass('close');
    } else {
      $button.removeClass('close');
      $button.addClass('open');
    }
});



 
});