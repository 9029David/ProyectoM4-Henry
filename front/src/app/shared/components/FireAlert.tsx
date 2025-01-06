import Swal from "sweetalert2";

export const getAlert = (confirmButtonText?: string, action?: () => void) => {
    return (
        Swal.fire({
            title: "You're sure?",
            text: "You won't be able to reverse this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: confirmButtonText ?? "Logout!"
        }).then((result) => {
            if (result.isConfirmed && action) {
                action(); // Ejecuta la acción pasada como parámetro
            }
        })
    )
}

export const Fire = (title: string) => {
    return Swal.fire(title, "", "success")
}
