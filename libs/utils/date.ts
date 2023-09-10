import moment from "moment-jalaali";
moment.loadPersian({usePersianDigits:true});

export const DateFromNow=(time:Date)=>{
    return moment(time).fromNow();
    }