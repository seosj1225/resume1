$(function(){
    // https://rendro.github.io/easy-pie-chart/
    
    var arrChartColor = ['#e8670c', '#ff9e5a', '#ff710d', '#7f4f2d', '#cc5b0b', '#cc3a1a'];
    $('.graph').each(function(idx, el){
        $(this).easyPieChart({
            animate: 2000,       // 진행시간
            easing: 'easeOutBounce', // 속도함수
            barColor: arrChartColor[idx],   // 채워지는 색상
            trackColor: '#efefef', // 트색 색상
            scaleColor: false, // 눈금선 색상
            lineCap:'butt', // 선의 끝 모양(butt, round, square)
            lineWidth:20, // 선의 폭
            size:180, // 원형차트의 크기
            //onStart:$.noop, // 시작부분에서 호출되는 콜백함수(animate가 false가 아닐때만 작동)
            //onStop:$.noop, // 끝에서 호출되는 콜백함수(animate가 false가 아닐때만 작동)
            onStep: function(from, to, percent) {  // 현재 값을 제공하는 애니메이션 중에 호출되는 콜백 함수
                $(this.el).find('.percent').text(Math.round(percent));
            }
        })
    })


    var chartBool = true;
    $(window).on('scroll', function() {
            var sct = $(this).scrollTop();
            var skillTop = $('#section2').offset().top 

            if (sct >= skillTop-60 && sct <= skillTop+60 ) {
                if (chartBool) {
                    $('.graph').each(function(idx, element) {
                        var num = $(this).attr('data-percent');
                        $('.graph').eq(idx).data('easyPieChart').disableAnimation().update(0).enableAnimation().update(num);
                    });
                    chartBool = false 
                }

            } else {
                chartBool = true; 
            }
        });

        $(".nav > ul> li > a").each(function(){
            $(this).click(function(){
                var num = $(this).parent().index()
                $(".nav > ul > li").removeClass("on");
                $(this).parent().addClass("on");
                var arsct = $("section").eq(num).offset().top - 50;
                $("body, html").animate({
                    scrollTop:arsct
                }, 800)
                return false
            })
        })
    })