![image](./src/assets/readme/preview.gif)

# Prueba técnica Front-End

Starter autocontenido para una prueba remota. Los recursos necesarios para replicar la interfaz acompañan al proyecto.

## Bases a evaluar

- Git
- Pug
- Sass
- JavaScript

## Consigna

Replica el componente del [diseño de referencia en Figma](https://www.figma.com/design/X9mQepZ1CLKNMbAAoEDhGS/front-end-test?node-id=0-1&p=f&m=dev). Debe mostrar seis tarjetas, pero solo tres al cargar. Al activar **See All Insights**, muestra las tres restantes.

La solución debe usar marcado semántico, BEM y ser accesible. Los datos están disponibles en `src/pages/index.pug`; usa iteraciones, interpolación o mixins si ayudan a mantener el código claro.

## Requisitos funcionales

- Replica la interfaz de Figma de forma responsive.
- Cada tarjeta debe usar la imagen que le corresponde en `src/assets/images/articles`.
- Oculta inicialmente las últimas tres tarjetas sin impedir que JavaScript pueda revelarlas.
- Implementa el control **See All Insights** para revelar las tarjetas ocultas.
- Mantén una experiencia accesible.

## Tiempo sugerido

75 minutos.

## Inicio

```bash
pnpm install
pnpm dev
```

Para verificar la entrega:

```bash
pnpm build
```

## Entrega

1. Crea una rama con el formato `feat/<nombre>`.
2. Desarrolla el ejercicio.
3. Realiza al menos un commit convencional.
4. Genera un PR con la solución.

Consulta los [criterios de evaluación](docs/criterios-de-evaluacion.md) antes de empezar.
