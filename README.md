# Svelte: La simplicidad hecha reactividad

¡Hola! Este repositorio es un espacio de pruebas para aprender las principales funcionalidades de Svelte/

## Tecnologías implementadas

- Svelte 5
- SvelteKit
- Typescript
- Sass
- Vitest

## Requerimientos de sistema

- Node.js 22.14.0
- Yarn 1.22.22

## Uso del repositorio en ambiente local

1. Clona el repositorio mediante el link suministrado por Git

```bash
git clone <<url>>
```

2. Ingresa a la ruta creada que aloja la carpeta de archivos del proyecto

```bash
cd <<nombre_carpeta>>
```

3. Instala dependencias

```bash
yarn install
```

4. Corre el ambiente en entorno local

```bash
yarn start
```

## Estructura de carpetas

```
├── /src                            # Carpeta raíz
│   ├── /lib                        # Carpeta de librería, contiene elementos de desarrollo
│   │   ├── /components             # Carpeta de componentes según Atomic Design
│   |   │   ├── /atoms              # Carpeta de componentes Atómicos
│   |   │   ├── /molecules          # Carpeta de componentes Moleculares
│   |   │   ├── /organisms          # Carpeta de componentes Organismos
│   |   │   └── /templates          # Carpeta de componentes Templates
│   │   ├── /core                   # Carpeta de funciones y elementos de desarrollo adicionales
│   |   │   ├── /constants          # Carpeta de constantes
│   |   │   ├── /hooks              # Carpeta de hooks
│   |   │   └── /utils              # Carpeta de funciones adicionales
│   │   └── /server                 # Carpeta para archivos de tipo servidor
│   ├── /routes                     # Carpeta con rutas de navegación
│   ├── /styles                     # Carpeta de estilos
│   ├── app.d.ts                    # Archivo de definición de interfaces globales
│   └── app.html                    # Archivo HTML principal
└── static                          # Carpeta de archivos estáticos
    └── favicon.png                 # Favicon del sitio
```
