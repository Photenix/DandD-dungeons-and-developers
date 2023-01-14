export const clearInput = () =>{
    const x = document.querySelectorAll('input')
    //console.log( x );
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        element.value = ''
    }
}