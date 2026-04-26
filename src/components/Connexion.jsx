import React from 'react'

function Connexion() {
    return (
        
            <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" onclick="showPage('home')" className="nav-link px-3 py-2 text-sm font-medium hover:text-amber-400 cursor-pointer">Inicio</a>
                <a href="#" onclick="showPage('products')" className="nav-link px-3 py-2 text-sm font-medium hover:text-amber-400 cursor-pointer">Productos</a>
                <a href="#" onclick="showPage('contact')" className="nav-link px-3 py-2 text-sm font-medium hover:text-amber-400 cursor-pointer">Contacto</a>
            </div>        

    )
}

export default Connexion