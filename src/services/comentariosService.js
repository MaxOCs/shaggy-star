// comentariosService.js
import { supabase } from '../../supabaseClient';

// Obtener todos los comentarios
export const getComentarios = async () => {
  const { data, error } = await supabase
    .from('comentarios') // Reemplaza 'comentarios' con el nombre de tu tabla
    .select('*');

    console.log('data', data);

  if (error) {
    console.error('Error al obtener comentarios:', error);
    return [];
  }

  return data;
};

// Agregar un nuevo comentario
export const addComentario = async (comentario) => {
  const { data, error } = await supabase
    .from('comentarios')
    .insert([comentario]);

  if (error) {
    console.error('Error al agregar comentario:', error);
    return null;
  }

  return data;
};