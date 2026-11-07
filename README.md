ivazquezvWeb
ivazquezvWeb es el portfolio personal y profesional de Iván Vázquez Vidador, creador de Encryptify, director técnico en DRAFT Design Web y gestor estratégico en Saltoki. Este sitio presenta su trayectoria, habilidades, proyectos y formación, con un enfoque en accesibilidad, modularidad y diseño visual claro.

Tecnologías utilizadas
HTML5 / CSS3 / JavaScript

Diseño responsivo y accesible

EmailJS v4 para envío de formularios

Animaciones CSS y efectos hover

Optimización SEO y robots.txt

Fuentes personalizadas y branding visual

Estructura modular por secciones (blog, contacto, formación, proyectos)

Estructura del proyecto
Código
src/
├── assets/         # Imágenes, iconos, fuentes y documentos
├── pages/          # HTML por sección (index, blog, contacto, etc.)
├── scripts/        # JS principal
├── styles/         # CSS principal
public/
├── 404.html        # Página de error personalizada
├── favicon.ico
├── robots.txt
Contacto
El formulario de contacto está integrado con EmailJS v4 y validación personalizada. Todos los campos son accesibles y visualmente claros. Si deseas contactar a Iván, visita la sección contact.html.

En desarrollo
Validación avanzada de formularios

Blog dinámico con tarjetas interactivas

Integración de YouTube y presentación de Encryptify

Mejora de accesibilidad y navegación por teclado

Licencia
Este proyecto es de uso personal y profesional. No se permite su redistribución sin autorización expresa.


## SEO y medición de visitas

Dominio principal: https://ivanvazquezv.com/. Alojamiento: Netlify; gestión del dominio: WordPress.

Las nueve páginas públicas incluyen título, descripción, URL canónica y metadatos para compartir. La portada incluye datos estructurados de perfil. `sitemap.xml` y `robots.txt` están en la raíz, porque este proyecto sirve HTML directamente desde ella. Mantener el sitemap al añadir o eliminar páginas. No se incluyen fechas de modificación inventadas.

Después de publicar, comprobar que `/robots.txt` y `/sitemap.xml` se sirven como texto y XML, respectivamente, y verificar las URL canónicas frente a las redirecciones del alojamiento. El archivo `public/404.html` tiene `noindex`; su uso como respuesta HTTP 404 depende de la configuración de Netlify.

### Estado de las estadísticas

No se ha encontrado una integración de analítica en el código del repositorio. Esto no demuestra ausencia de visitas: el alojamiento podría registrar tráfico o insertar una integración externa. No se ha añadido ningún identificador de medición ficticio ni se ha activado un servicio de pago.

Para completar la medición, revisar el proyecto en Netlify y las propiedades existentes de Google Search Console y Analytics. Search Console muestra impresiones, consultas y clics procedentes de Google; no representa todas las visitas. Para tráfico de todas las fuentes, configurar el sistema de analítica elegido y verificar una visita real en el panel antes de dar la instalación por terminada. Si requiere consentimiento, cargarlo únicamente cuando corresponda y permitir retirar ese consentimiento.

En Search Console, verificar el dominio mediante el registro DNS que genere la cuenta (en el proveedor que gestione los DNS autoritativos), enviar `https://ivanvazquezv.com/sitemap.xml` e inspeccionar la portada. No publicar códigos de verificación inventados. Medir la evolución de clics, impresiones, páginas de entrada y contactos; no prometer posiciones concretas.


## Actualización del portfolio

La portada presenta proyectos destacados (WodIO y Encryptify), áreas de trabajo, artículos y acceso directo al contacto. WodIO dispone de una ficha en `projects.html#wodio`, basada en la descripción del proyecto. Su enlace de contacto completa el mensaje con una consulta sobre WodIO.

El formulario conserva la integración existente de EmailJS. El teléfono es opcional; los estados de envío son visibles y accesibles. Se bloquean los envíos duplicados mientras se procesa una solicitud y se conserva el texto en caso de error. La disponibilidad y entrega real dependen de la configuración de la cuenta de EmailJS.

La navegación dispone de enlace para saltar al contenido, página activa, control de teclado y cierre del menú al seleccionar un enlace. El diseño respeta la preferencia de movimiento reducido y adapta la portada, tarjetas y navegación a pantallas pequeñas.

Validación realizada: estructura de las nueve páginas, IDs únicos, un H1 y un main por página, referencias locales y anclas; sintaxis JavaScript y comprobación de diferencias; simulación de envío correcto, error y servicio no disponible sin enviar correos. La revisión visual en navegador sigue pendiente porque el entorno bloquea la apertura del servidor local.
