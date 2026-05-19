# Proyecto Taller V2 🚀

Un proyecto de desarrollo web moderno estructurado bajo una filosofía de entorno limpio y optimizado para ofrecer el máximo rendimiento. Este repositorio contiene la segunda versión del proyecto de taller, implementando una arquitectura escalable, código modular y un flujo de trabajo eficiente de compilación.

🔗 **[Ver la aplicación en vivo (Despliegue en Vercel)](https://proyecto-taller-v2.vercel.app)**

---

## 🛠️ Stack Tecnológico

El proyecto está construido sobre un ecosistema de herramientas ágiles orientadas a la velocidad de desarrollo y rendimiento en producción:

* **[Vite](https://vitejs.dev/)**: Entorno de desarrollo ultrarrápido y empaquetador optimizado.
* **JavaScript (ES6+)**: Lógica dinámica, asincronía y manipulación eficiente del DOM.
* **HTML5 & CSS3**: Maquetación semántica y diseño responsivo adaptativo.
* **[ESLint](https://eslint.org/)**: Motor de linting para estandarizar la calidad del código, evitar errores de sintaxis y mantener convenciones estrictas.
* **[Vercel](https://vercel.com/)**: Plataforma elegida para el *Continuous Deployment* (CD), garantizando baja latencia y alta disponibilidad.

## 📁 Estructura del Proyecto

La organización de carpetas sigue un patrón claro que separa los recursos estáticos públicos del código fuente principal:

```text
Proyecto-Taller-V2/
├── public/              # Archivos estáticos accesibles directamente (favicon, imágenes)
├── src/                 # Directorio principal del código fuente
│   ├── assets/          # Recursos internos empaquetados por Vite
│   ├── css/             # Hojas de estilo globales y modulares
│   └── js/              # Módulos y lógica de la aplicación
├── .gitignore           # Exclusión de módulos y archivos locales
├── eslint.config.js     # Reglas y configuración del linter
├── index.html           # Punto de entrada de la aplicación
├── package.json         # Gestión de metadatos, scripts y dependencias
├── package-lock.json    # Bloqueo de versiones exactas del árbol de dependencias
└── vite.config.js       # Configuración de compilación y servidor local
```

## 🚀 Guía de Instalación y Uso Local

Para probar o colaborar con el desarrollo de la aplicación en tu entorno de trabajo, asegúrate de tener [Node.js](https://nodejs.org/) previamente instalado.

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/ChristianMarquezE/Proyecto-Taller-V2.git](https://github.com/ChristianMarquezE/Proyecto-Taller-V2.git)
    cd Proyecto-Taller-V2
    
```

2.  **Instalar las dependencias:**
    Utiliza npm (o tu gestor de paquetes de preferencia) para instalar todos los módulos necesarios:
    ```bash
    npm install
    
```

3.  **Desplegar el entorno de desarrollo:**
    ```bash
    npm run dev
    
```
    *Este comando inicializará el servidor local de Vite (típicamente en `http://localhost:5173`). Incluye recarga en caliente (HMR) instantánea al guardar cualquier archivo.*

4.  **Generar el build de producción:**
    ```bash
    npm run build
    
```
    *El empaquetador procesará y minimizará los archivos, generando el resultado optimizado dentro de la carpeta `dist/`.*

## ⚙️ Scripts de npm

A través del archivo `package.json`, dispones de los siguientes atajos para facilitar el flujo de trabajo:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Lanza el servidor de desarrollo local con HMR. |
| `npm run build` | Compila la aplicación para despliegue en producción. |
| `npm run preview` | Inicia un servidor para previsualizar el build final localmente. |
| `npm run lint` | Ejecuta ESLint sobre los archivos de código para detectar y corregir problemas. |

## 🧑‍💻 Autores

**Christian Escobar Márquez**
* Front-End Developer | Estudiante de Ingeniería en Informática
* **GitHub**: [@ChristianMarquezE](https://github.com/ChristianMarquezE)
* **Contacto (Gaming/Comunidad)**: Tkiila

**René Muñoz Perot**
* **GitHub**: [@llShamancitolll](https://github.com/llShamancitolll)

---

*Si encuentras algún problema o tienes alguna idea para potenciar este proyecto, eres libre de abrir un **Issue** o proponer mejoras a través de un **Pull Request**.*