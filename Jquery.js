
$(document).ready(function(){

    
        // About section slide 

    // about slide design
    var slide = $('.slide');
    var numSlide = slide.length;
        slide.hide();
        var x=0;
        slide.eq(x).show();
        // next slide 
        $('.btn-next').click(function(){
            slide.eq(x).hide();
            $('.page-slide').find('ul li').eq(x).removeClass('active');
            x++;
            if(x>=4){
                x=0;
            }
            slide.eq(x).show();
            $('.page-slide').find('ul li').eq(x).addClass('active');
        })
        // back slide 
        $('.btn-back').click(function() { 
            slide.eq(x).hide();
            $('.page-slide').find('ul li').eq(x).removeClass('active');
            if (x < 0) { 
                x = numSlide -1 ;
            }
            x--;
            $('.page-slide').find('ul li').eq(x).addClass('active');
            slide.eq(x).show();
        });
        // get pagination desgin
        get_slide_page();
        function get_slide_page(){
            var li1='';
            var x=0;
            for(i=0;i<numSlide;i++){
                x++;
                li1+= "<li>"+x+"</li>";
            }

            $('.page-slide').find('ul').html(li1);
            $('.page-slide').find('ul li').eq(0).addClass('active');
        }
        // click on numslide for show each slide
        $('.page-slide').on('click','ul li',function(){
            slide.eq(x).hide();
            $('.page-slide').find('ul li').eq(x).removeClass('active');
            x=$(this).index();
            slide.eq(x).show();
            $('.page-slide').find('ul li').eq(x).addClass('active');


        });








    var menuBox = $('.header1');
    var popUp= "<div class='popUp'></div>";
    var menuData = [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "PHP",
        "JQUERY",
    ];
    var menu2={
        "Apple":["IMac","iPhone","iWatch","iTV"],
        "Facebook":["Phon Phyron","NONE","NONE"],
        "YouTube":["Phyron-Coding","Flutter","Web Developer"],
        "Telegram":["069 997 675","096 662 8841","097 578 6200"]
    }
    get_menu2();
    function get_menu2(){
        var txt='';
        for(var keys in menu2){
            var txt2 ='';
            var subMenuData = menu2[keys];
            for(i in subMenuData){
                    txt2 +="<li><a href=''>"+subMenuData[i]+"</a> </li>" ;
            }
            var subMenu = "<div class='sum-Menu'><ul>"+txt2+"</ul></div>";
            txt+="<li><a href=''>"+keys+"</a> "+subMenu+"</li>";
        }
            menuBox.find('ul').append(txt);
    }
    // var keys= Object.keys(menu2);
    // alert(keys);
    // alert(menu2['Apple'][0]);
    get_menu();
    function get_menu(){
        // var li= "<li><a href=''>Google</a>"+" <a href=''>Facebook</a> <a href=''></a></li>";
        var txt ='';
        for(i in menuData){
            txt+="<li><a href=''>"+menuData[i]+"</a> </li>";
        }
        // menuBox.find('ul').append(txt);
        $('.popMenu').find('ul').html(txt);
    }
    $('#btnMenu').click(function(){
        $('body').append(popUp);
        $('.popMenu').css({"left":"0"})
    })
    $('body').on('click','.popUp', function(){
        $(this).remove();
        $('.popMenu').css({"left":"-272px"})
    })
   

})
