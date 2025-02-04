// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gwxiizccplxekxbtznmx.supabase.co"; // Reemplaza con tu URL de Supabase
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3eGlpemNjcGx4ZWt4YnR6bm14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxOTE3OTMsImV4cCI6MjA1Mzc2Nzc5M30.RdI-AXuic3MmZZAQQMSgmLvU-k0BRDaWDRwKOWzBV94"; // Reemplaza con tu clave pública (anon key)


export const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Conexión a Supabase:', supabase);