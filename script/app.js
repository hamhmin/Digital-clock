$(function () {
    // 시간재생 - 매 1초마다 재생
    setInterval(function () {
        let d = new Date();
        let h = d.getHours(); //시간
        let m = d.getMinutes(); //분
        let s = d.getSeconds(); //초
        let day = d.getDay(); // 일
        let today = ''; // 오늘 요일
        console.log(d, h, m, s , day);

        //0 ~ 9까지는 앞에 0을 표시
        if(h < 10){
            h = '0' + h;
        }
        if(m < 10){
            m = '0' + m;
        }
        if(s < 10){
            s = '0' + s;
        }
        $('.hour').html(h);
        $('.min').html(m);
        $('.sec').html(s);
        
        // 오전 오후 표시 24시간제 if()
        
        if(h < 12){
            $('.am').html('AM');
        } else{
            $('.am').html('PM');
        }

       
        // 요일 출력
        if(day == 1){
            today = ('MON');
        }
        if(day == 2){
            today = ('TUE');
        }
        if(day == 3){
            today = ('WED');
        }
        if(day == 4){
            today = ('THU');
        }
        if(day == 5){
            today = ('FRI');
        }
        if(day == 6){
            today = ('SAT');
        }
        if(day == 7){
            today = ('SUN');
        }
        $('.weekday').html(today);


    }, 1000);
});

