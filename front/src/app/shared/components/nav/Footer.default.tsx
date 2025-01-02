
export const FooterDefault = () => {
    return (
        <footer className="flex flex-col justify-start">
            <div className="w-[100%] px-2 bg-[#f5f5f5]">
                <div className="max-w-[1000px] mx-auto py-4 text-gray-900 flex justify-between items-center
                text-xs">
                    <span className="opacity-40">Copyright © 2024 TechShop S.R.L.</span>
                    <span className="flex">
                        Protegido por reCAPTCHA -  
                        <a href="https://policies.google.com/privacy?hl=es-419"> Privacidad </a>
                        <a href="https://policies.google.com/terms?hl=es-419"> Condiciones </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}