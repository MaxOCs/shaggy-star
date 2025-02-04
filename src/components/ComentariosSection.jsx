// Comentarios.jsx
import { useEffect, useState } from 'react';
import { getComentarios, addComentario } from '../services/comentariosService';
import ToastSuccess from '../components/ToastSuccess';
import ComentarioItem from './ConmentarioItem';
import WhatsApp from './WhatsApp';

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [Apellido, setApellido] = useState('');
  const [Nombre, setNombre] = useState('');;
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [showToast, setShowToast] = useState(false); // Estado para controlar el toast

  useEffect(() => {
    const fetchComentarios = async () => {
      const data = await getComentarios();
      setComentarios(data);
    };

    fetchComentarios();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Nombre.trim() || !Apellido.trim() || !nuevoComentario.trim()) {
      alert("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    try {
      e.preventDefault();
      if (nuevoComentario.trim()) {
        const Usuario = Nombre + " " + Apellido;
        const comentario = {
          user: Usuario,
          comentario: nuevoComentario,
          created_at: new Date().toISOString(),
        };

        await addComentario(comentario);
        setNuevoComentario('');

        // Mostrar el toast
        setShowToast(true);

        // Ocultar el toast después de 3 segundos
        setTimeout(() => {
          setShowToast(false);
        }, 3000);

        // Recargar los comentarios después de agregar uno nuevo
        const data = await getComentarios();
        setComentarios(data);
      }
    } catch (error) {
      console.error('Error al agregar comentario:', error);
    }
  };

  return (
    <section id="comentarios" class="bg-gray-100">
    <div class="flex md:flex-row flex-col mt-4 ">
      <WhatsApp />
      <div className="flex flex-col gap-4  md:w-1/2 w-full mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 class="font-semibold text-lg text-center">Añadir comentario</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={Apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Apellido"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
            placeholder="Escribe tu comentario..."
          />
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>



      {/* Mostrar el toast si showToast es true */}
      {showToast && <ToastSuccess onClose={() => setShowToast(false)} />}
        
      <div class="flex flex-col gap-4 overflow-auto h-40 md:h-96 md:w-1/2">
        <ul class="divide-y divide-gray-200 gap-4">
          {comentarios.map((comentario) => (
            <li key={comentario.id}>
              <ComentarioItem {...comentario} />
            </li>
          ))}
        </ul>
      </div>

    </div>
    </section>
  );
};

export default Comentarios;
