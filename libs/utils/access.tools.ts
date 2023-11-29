

export const canAccess=(type:string)=>{

    switch (type) {
        case 'cash':
            return false;
        case 'free':
            return true;
        default:
            return false;
    }
}