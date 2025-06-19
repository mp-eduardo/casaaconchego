import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Obtém o nome do repositório do package.json (se precisar para o base)
  // No entanto, para GitHub Pages, o nome do repo é necessário.
  // Você DEVE ATUALIZAR 'SEU_REPOSITORIO' abaixo.
  const repoName = 'SEU_REPOSITORIO'; // ATUALIZE AQUI com o nome do seu repositório GitHub

  return {
    plugins: [react()],
    base: command === 'build' ? `/${repoName}/` : '/',
  };
});