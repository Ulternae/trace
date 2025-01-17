# Trace

## Decisiones de diseño
1. **Diseño conceptual**: 
   - Creación del diseño en [Figma](https://www.figma.com/design/MHrNzVtLrsRZHzzpCGA85I/Trace?node-id=0-1&t=px2Q5U12w7Ta6v5D-1)
 para definir el comportamiento general de la aplicación y garantizar la consistencia.
   - Uso de colores personalizados para proporcionar una identidad visual única a Trace.
   - Implementación de un diseño responsivo para adaptarse a cualquier dispositivo, desde 320px en adelante.

2. **Interfaz de usuario**:
   - Barra lateral ocultable en dispositivos móviles para maximizar el espacio disponible.
   - Foco principal en la búsqueda de usuarios desde el Home, el propósito central de la aplicación.
   - Modo claro y oscuro, sincronizado inicialmente con el tema del sistema operativo para mayor familiaridad.
   - Manejo de multiples idiomas, basados en el navegador y por default el ingles.
   - Elementos interactivos como hovers o cursor-pointer para diferencias estados activos e inactivos.

3. **Experiencia de usuario**:
   - Manejo de "skeleton loaders" y simulación de retrasos en la API (800ms) para una transición suave entre estados de carga.
   - ![image](https://github.com/user-attachments/assets/f170ef11-3a35-4ae6-8a32-c4feba993b5b)

   - Mecanismo para manejar errores con mensajes amigables y una simulación de fallo (1 de cada 25 veces) para probar la robustez.
   - ![image](https://github.com/user-attachments/assets/e324d5db-922c-43ec-8a31-1068cadc8a03)

   - Rutas dinámicas que preservan la información seleccionada al recargar la página.
   - ![image](https://github.com/user-attachments/assets/defed427-6abd-4fd2-8b29-18d76af36581)


4. **Flujo de búsqueda**:
   - Vista global de todos los usuarios, mostrando imagen, nombre y correo electrónico.
   - Vista previa expandida con información adicional como país, dirección, género, etc., en la misma página para agilidad.
   - Vista detallada de cada usuario con su información completa, accesible mediante una acción consciente del usuario.

## Optimización
- Uso de **React.memo**, **useMemo** y **useCallback** para minimizar renderizados innecesarios.
- Creación de interfaces tipos y enums para prevenir errores y valores quemados.

## Accesibilidad
- Inclusión de atributos como `aria-label` traducidos para proporcionar una experiencia inclusiva y comprensible para todos los usuarios.

## Consistencia
- Definición de interfaces y tipos para mantener la coherencia y prevenir fallos en el futuro.

## Escalabilidad
- Preparada para soportar múltiples idiomas, con traducciones disponibles en varios idiomas (`en.json`, `es.json`, `gl.json`).
- Paginación de usuarios, diseñada para escalar sin afectar el rendimiento (actualmente 100 usuarios).
- Rutas implementadas:
  - **Users**: Vista completa de usuarios.
  - **Favorites**: Usuarios marcados como favoritos.
  - **User/:id** Ruta privada para ver detalles del perfil de usuario.

## Responsividad
- Diseño adaptable a diferentes dispositivos y tamaños de pantalla, asegurando una experiencia óptima desde dispositivos móviles hasta pantallas grandes.

## Futuro de Trace
Trace tiene un gran potencial de expansión, con posibles características adicionales como:
- Estadísticas de usuarios registrados por mes.
- Inicio de sesión y gestión de permisos para diferentes roles de usuario.
- Creación, actualización y eliminación de perfiles de usuario.
