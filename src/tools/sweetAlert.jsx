import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default MySwal

export const sweetConfirm = () =>{
    MySwal.fire({
        title: <p>Hello World</p>,
    }).then(() => {
        return MySwal.fire(<p>Shorthand works too</p>)
    })
}

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

/*
    
    MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'cambio',
        showConfirmButton: false,
        timer: 1500
    })


*/