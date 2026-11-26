/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Permite que el build termine aunque haya avisos de ESLint.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    // La lista de cursos antes estaba en /projects: mantenemos los links viejos funcionando.
    return [{ source: "/projects", destination: "/cursos", permanent: true }];
  },
};
