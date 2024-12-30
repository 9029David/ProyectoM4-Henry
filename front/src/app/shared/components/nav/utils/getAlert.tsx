import Swal from "sweetalert2";

export const getAlert = () => {
    return (
        Swal.fire({
            title: "You're sure?",
            text: "You won't be able to reverse this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Logout!"
        })
    )
}

export const Fire = (title: string, icon: string) => {
    return Swal.fire(title, "",icon = "success")
}
