export default class TheInternet {
    getThingsFromTheInternet(theThings, errorInTheInternet) {
        return new Promise((gotYaSomething, gotAProblem) => {
            setTimeout(() => {
                if(theThings.length > 0) {
                    gotYaSomething(theThings);
                }else{
                    gotAProblem(errorInTheInternet);
                }
            },1000)
        })
    }
}