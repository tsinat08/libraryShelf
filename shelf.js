class Media{
    constructor(name){
        // title, isCheckedOut, ratings
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get titie(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }
    set isCheckedOut(isCheckedOut){
        this._isCheckedOut = true;
    }
    toggleCheckOutStatus (){
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating (){

    }
}