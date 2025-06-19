import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const repoName = 'casaaconchego'; // ATUALIZADO com o nome do seu repositório GitHub

  return {
    plugins: [react()],
    base: command === 'build' ? `/${repoName}/` : '/',
  };
});