export function generateVisualID(id: number): string {
    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase(); // Cadena aleatoria de 6 caracteres
    return `ORD-${id}-${randomPart}`;
  }