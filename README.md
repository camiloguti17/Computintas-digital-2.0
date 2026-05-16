# Computintas Digital — Proyecto organizado para Antigravity

Este paquete convierte el código HTML monolítico original en una estructura ordenada para edición y mantenimiento.

## Estructura

```text
computintas-digital-antigravity/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       └── README.md
├── docs/
│   ├── ESTRUCTURA-PROYECTO.md
│   └── INVENTARIO-IMAGENES.md
└── original/
    └── Codigo-completo-asistencia-2.0-original.html
```

## Cómo abrirlo en Antigravity

1. Descomprime el ZIP.
2. Abre la carpeta `computintas-digital-antigravity` en Antigravity.
3. Abre `index.html`.
4. Usa una vista previa HTML o un servidor local si quieres probar navegación, menú móvil y formulario simulado.

## Qué se separó

- El CSS embebido pasó a `assets/css/styles.css`.
- El JavaScript embebido pasó a `assets/js/main.js`.
- El HTML principal quedó en `index.html`.
- El código original se conservó en `original/` por seguridad.
- El inventario de imágenes quedó en `docs/INVENTARIO-IMAGENES.md`.

## Nota sobre imágenes

Las imágenes principales siguen apuntando a URLs de WordPress para no romper la visualización. Si quieres que el proyecto funcione sin internet o sin depender de WordPress, descarga las imágenes listadas en `docs/INVENTARIO-IMAGENES.md`, guárdalas en `assets/img/` y actualiza las rutas en `index.html`.

## Estado funcional

La página conserva:

- Menú responsive.
- Secciones de inicio, servicios, productos, nosotros y contacto.
- Formulario simulado.
- Año automático en footer.
- Íconos SVG embebidos en el HTML.
