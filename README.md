# Proyecto React — Desarrollo Full Stack II

> Aplicación web en React y TypeScript con navegación entre páginas, desarrollada como trabajo del ramo Desarrollo Full Stack II (Duoc UC).

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

## Contenido

- Páginas de **inicio**, **inicio de sesión** y **registro**
- Componente de menú de navegación
- Enrutamiento ligero con [wouter](https://github.com/molefrog/wouter)
- Despliegue automático a **GitHub Pages** mediante GitHub Actions al hacer push a `main`

## Stack

| Capa | Tecnología |
| --- | --- |
| Interfaz | React, TypeScript |
| Enrutamiento | wouter |
| Build | Vite |
| Calidad | Oxlint |
| CI/CD | GitHub Actions + GitHub Pages |

## Estructura

```text
src/
├── components/   Menu
└── pages/        home, login, register
.github/workflows/deploy.yml   despliegue a GitHub Pages
```

## Cómo ejecutarlo

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción
npm run lint      # revisión con Oxlint
npm run preview   # vista previa del build
```

## Autor

**Mario Meléndez** — Estudiante de Ingeniería en Informática (Duoc UC).
[Perfil de GitHub](https://github.com/Mario-Melendez-Inostroza)
