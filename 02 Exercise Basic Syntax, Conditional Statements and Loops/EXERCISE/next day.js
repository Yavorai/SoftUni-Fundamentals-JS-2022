function demo(year, month, day) {
    let isSpecific = false

    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        if(day === 31 && month === 12){
            year += 1
            console.log(`${year}-1-1`);
            isSpecific = true;
        }else if(day === 31){
            month += 1
            console.log(`${year}-${month}-1`);
            isSpecific = true;
        }
    }else if(month === 4 || month === 6 || month === 9 || month === 11){
        if(day === 30){
            month += 1
            console.log(`${year}-${month}-1`);
            isSpecific = true;
        }
    }else if(month ===2){
        if((year % 4 === 0 && year % 100 !==0) || year % 400 === 0){
            if(day === 29){
                month +=1;
                console.log(`${year}-${month}-1`);
                isSpecific = true;
            }
        }else if(day === 28){
            month += 1
            console.log(`${year}-${month}-1`);
            isSpecific = true;
        }
    }

    if(!isSpecific){
        if(year >= 1 && year <= 99){
            console.log(`${1900 + year}-${month}-${day +1}`);
        }else{
            console.log(`${year}-${month}-${day + 1}`);
        }
    }
}
demo(2016, 9, 30);
demo(2016, 10, 1);
