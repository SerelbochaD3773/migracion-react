import { useState } from "react"
function ContactForm() {
 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")
 const [email, setEmail] = useState("")
 const [subject, setSubject] = useState("")
 const [message, setMessage] = useState("")


  return (
    <div className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">ENVÍANOS UN MENSAJE</h3>
              <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-6">
                <p className="text-amber-700 text-sm">
                  <strong>Demo:</strong> Este es un formulario de demostración.
                  Los mensajes no se enviarán realmente.
                </p>
              </div>
              <form id="contact-form" onsubmit="handleContactSubmit(event)">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label for="firstName" className="block text-sm font-medium text-gray-700 mb-2">NOMBRE</label>
                    <input type="text" id="firstName" name="firstName" required="" className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                  <div>
                    <label for="lastName" className="block text-sm font-medium text-gray-700 mb-2">APELLIDOS</label>
                    <input type="text" id="lastName" name="lastName" required="" className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" onChange={(e) => setLastName(e.target.value)} />
                  </div>
                </div>

                <div className="mb-6">
                  <label for="email" className="block text-sm font-medium text-gray-700 mb-2">EMAIL</label>
                  <input type="email" id="email" name="email" required="" className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-6">
                  <label for="subject" className="block text-sm font-medium text-gray-700 mb-2">ASUNTO</label>
                  <select id="subject" name="subject" required="" className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" onChange={(e) => setSubject(e.target.value)}>
                    <option value="">Selecciona un asunto</option>
                    <option value="general">Consulta general</option>
                    <option value="product">Información de producto</option>
                    <option value="order">Estado de pedido</option>
                    <option value="return">Devoluciones</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label for="message" className="block text-sm font-medium text-gray-700 mb-2">MENSAJE</label>
                  <textarea id="message" name="message" rows="5" required="" className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none" onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <button type="submit" className="w-full bg-gray-900 text-white py-4 px-6 hover:bg-gray-800 transition-colors font-semibold tracking-wider">
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>
  )
}

export default ContactForm