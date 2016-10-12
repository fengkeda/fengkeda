/** 
 * 倒计时js
 * 
 * @author  YinWeida
 * @date    2016-06-27    
 */
function setEndTime() {
        $('.countdown').each(function() {
                var vendDay = $(this).find('.day').html();
//              console.log(vendDay);
                var vendHour = $(this).find('.hour').html();
                var vendMinute = $(this).find('.minute').html();
                var vendSecond = $(this).find('.second').html();
                if (vendSecond > 0) {
                    if (vendSecond > 10) {
                        $(this).find('.second').html(vendSecond - 1);
                    } else {
                        $(this).find('.second').html("0" + (vendSecond - 1));
                    }
                } else {
                    if (vendMinute > 0) {
                        $(this).find('.second').html(59);
                        if (vendMinute > 10) {
                            $(this).find('.minute').html(vendMinute - 1);
                        } else {
                            $(this).find('.minute').html("0" + (vendMinute - 1));
                        }
                    } else {
                        if (vendHour > 0) {
                            $(this).find('.second').html(59);
                            $(this).find('.minute').html(59);
                            if (vendHour > 10) {
                                $(this).find('.hour').html(vendHour - 1);
                            } else {
                                $(this).find('.hour').html("0" + (vendHour - 1));
                            }
                        } else {
                            if (vendDay > 0) {
                                $(this).find('.second').html(59);
                                $(this).find('.minute').html(59);
                                $(this).find('.hour').html(23);
                                if (vendDay > 10) {
                                    $(this).find('.day').html(vendDay - 1);
                                } else {
                                    $(this).find('.day').html("0" + (vendDay - 1));
                                }
                            } else {
                                $(this).html("此团购已结束");
                            }
                        }
                    }
                }
        });
    }
    
 function setBrandEndTime(){
    if($('.time').attr('status') == 'nomal'){
        $('.time').each(function() {
        var Day = $(this).find($('.tian')).html();
        var Hour = $(this).find($('.shi')).html();
        var Minute = $(this).find($('.fen')).html();
        var Second = $(this).find($('.miao')).html();
        if (Second > 0) {
            if (Second > 10) {
                $(this).find($('.miao')).html(Second - 1);
            } else {
                $(this).find($('.miao')).html("0" + (Second - 1));
            }
        } else {
            if (Minute > 0) {
                $(this).find($('.miao')).html(59);
                if (Minute > 10) {
                    $(this).find($('.fen')).html(Minute - 1);
                } else {
                    $(this).find($('.fen')).html("0" + (Minute - 1));
                }
            } else {
                if (Hour > 0) {
                    $(this).find($('.miao')).html(59);
                    $(this).find($('.fen')).html(59);
                    if (Hour > 10) {
                        $(this).find($('.shi')).html(Hour - 1);
                    } else {
                        $(this).find($('.shi')).html("0" + (Hour - 1));
                    }
                } else {
                    if (Day > 0) {
                        $(this).find($('.miao')).html(59);
                        $(this).find($('.fen')).html(59);
                        $(this).find($('.shi')).html(23);
                        if (Day > 10) {
                            $(this).find($('.tian')).html(Day - 1);
                        } else {
                            $(this).find($('.tian')).html("0" + (Day - 1));
                        }
                    } 
                }
            }
        }
     })
    } 
 }
    
    $(function(){
    	setInterval(setEndTime, 1000);
        setInterval(setBrandEndTime, 1000);
    })
    

