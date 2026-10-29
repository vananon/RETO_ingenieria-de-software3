# EventSales

Aplicación web responsiva para vender entradas a eventos (Angular 22 + Angular Material + ng2-charts).

## Cómo ejecutarlo

```bash
npm install
npm start          # http://localhost:4200
npm run build      # compilación de producción
```

## Pantallas implementadas

| Pantalla (Figma)               | Ruta                     | Archivos                                   |
| ------------------------------ | ------------------------ | ------------------------------------------ |
| 00 Landing                     | `/`                      | `src/app/home/`                            |
| 01 Login                       | `/login`                 | `src/app/pages/auth/login/`                |
| 02 Crear cuenta — Participante | `/registro`              | `src/app/pages/auth/signup/`               |
| 03 Eventos                     | `/participante/eventos`  | `src/app/pages/participante/events/`       |

Layouts: `auth-layout` (panel de marca + formulario), `participante-layout` (cabecera con "Mis entradas"),
`organizador-layout` (base, sin pantallas todavía).

Variables de diseño (colores, tipografía Inter, radios) en `src/styles.css`, también conectadas a los tokens de Angular Material.

## Pendiente

- Pantallas por implementar: 04 Detalle del evento, 05 Pago, 06 Confirmación, 02b Crear cuenta — Organizador,
  10 Dashboard, 11 Mis eventos, 12/13 Crear evento, 14 Editar perfil.
- Los botones "Ver entradas", "Publicar un evento" y "Panel del organizador" apuntan a rutas provisionales
  hasta que existan esas pantallas.
- Los textos de error de formulario se redactaron en español; revisar contra el frame "07 Login — error".
- Comprobar en el Figma: lugares de las tarjetas de 03 Eventos ("Arena Centro", "Club Aurora") y la inicial del avatar.
